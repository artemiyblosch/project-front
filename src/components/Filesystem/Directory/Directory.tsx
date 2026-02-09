import { File } from "../File"

type DirProps = {
    name : string,
    path : string,
    rest_tree : any,
}

export const Directory : React.FC<DirProps> = ({name,path,rest_tree}) => {
    return <div>
        <p>{name}</p>
        {rest_tree[0]?.map((e : string) => <File name={e} path={`${path}/${e}`}/>)}
        {Object.keys(rest_tree[1])?.map((e) => <Directory rest_tree={rest_tree[1][e]} name={e} path={`${path}/${e}`}/>)}
    </div>
}