import { useRecoilState } from "recoil";

import { nameState } from "./states";

const Input = () => {
  const [name, setName] = useRecoilState(nameState);

  const onNameChange = (e) => setName(e.target.value);

  return (
    <div>
      <p>Enter Your Name:</p>
      <input value={name} onChange={onNameChange} />
    </div>
  );
};

export default Input;
