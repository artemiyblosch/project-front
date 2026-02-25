import { APICall, getGroup } from "./calls";
import { APIQuery } from "./forms";

type ggi = (
    user : any,
    group : string,
    setGName : React.Dispatch<string>,
    setGvibe : React.Dispatch<string>,
    setVibes : React.Dispatch<any>,
    setWarn : React.Dispatch<number>,
) => void

export const getGroupInfo : ggi = (user, group, setGName, setGvibe, setVibes, setWarn) => (
    new APIQuery(
        ["pk"],
        getGroup as APICall
    )
    .addResponseTo(200, (r) => {
        const req = JSON.parse(r);
        setGName(req.name);
        setGvibe(req.main_vibe);
        setVibes({ct: req.vibes.ct, cool: req.vibes.cool, sad: req.vibes.sad});

        if(req.scam_warns.includes(user.tag)) {
            setWarn(1);
        } else if(req.toxic_warns.includes(user.tag)) {
            setWarn(2);
        } else {
            setWarn(0);
        }
    })
    .addResponseTo(404, () => alert("OKAK"))
    .addOnFailure((e) => alert(`???: ${e}`))
    .callable()({pk: group})
)