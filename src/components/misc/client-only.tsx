import { FC, useEffect, useState } from "react";

const ClientOnly: FC = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // TODO: return a loader here in the future
    return null;
  }

  return <div {...delegated}>{children}</div>;
}

export default ClientOnly