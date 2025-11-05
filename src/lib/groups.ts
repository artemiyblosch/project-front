import { APICall, getGroup } from "./calls";
import { APIQuery } from "./forms";

type ggi = (
    group : string,
    setGName : React.Dispatch<string>,
    setGvibe : React.Dispatch<string>,
    setVibes : React.Dispatch<any>,
) => void

export const getGroupInfo : ggi = (group, setGName, setGvibe, setVibes) => (
    new APIQuery(
        ["pk"],
        getGroup as APICall
    )
    .addResponseTo(200, (r) => {
        const req = JSON.parse(r);
        setGName(req.name);
        setGvibe(req.main_vibe);
        setVibes({ct: req.vibes.ct, cool: req.vibes.cool, sad: req.vibes.sad});
    })
    .addResponseTo(404, () => alert("OKAK"))
    .addOnFailure((e) => alert(`???: ${e}`))
    .callable()({pk: group})
)