import { useRecoilState, useRecoilValue } from "recoil";

import { charState, nameState } from "./states";

const Display = () => {
  const charName = useRecoilValue(charState);
  const [name, setName] = useRecoilState(nameState);

  return (
    <div>
      <p>My name is {name} </p>
      <p>My name has {charName} chararcters</p>
    </div>
  );
};

export default Display;
