import { APICall, getGroup } from "./calls";
import { APIQuery } from "./forms";

type ggi = (
    group : string,
    setGName : React.Dispatch<string>,
    setGvibe : React.Dispatch<string>
) => void

export const getGroupInfo : ggi = (group, setGName, setGvibe) => (
    new APIQuery(
        ["pk"],
        getGroup as APICall
    )
    .addResponseTo(200, (r) => {
        const req = JSON.parse(r);
        setGName(req.name);
        setGvibe(req.main_vibe);
    })
    .addResponseTo(404, () => alert("OKAK"))
    .addOnFailure((e) => alert(`???: ${e}`))
    .callable()({pk: group})
)