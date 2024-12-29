import { useEffect, useState } from "react";

const useMount = () => {
  const [isMount, setisMount] = useState<boolean>(true);
  useEffect(() => {
    setisMount(false);
  }, []);
  return isMount;
};

export default useMount;
