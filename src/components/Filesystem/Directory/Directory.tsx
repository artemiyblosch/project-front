import { File } from "../File"

type DirProps = {
    name : string,
    path : string,
    rest_tree : any,
}

function isEmpty(obj : object) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

export const Directory : React.FC<DirProps> = ({name,path,rest_tree}) => {
    return <div>
        <image href="/directory.png"/><p>{name}</p>
        {rest_tree[0].map((e : string) => <File name={e} path={`${path}/${e}`}/>)}
        {!isEmpty(rest_tree[1]) && Object.keys(rest_tree[1]).map((e) => <Directory rest_tree={rest_tree[1]} name={e} path={`${path}/${e}`}/>)}
    </div>
}