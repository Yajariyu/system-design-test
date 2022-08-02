import React, { useContext } from "react";
import { Source, DocsContext } from "@storybook/addon-docs";
import { name as packageName } from "../../package.json";


interface ImportCopyProps {
    nameComponent:string
}

const ImportCopy = ({nameComponent}:ImportCopyProps) => {
//   const { kind } = useContext(DocsContext);
//   const componentName = kind.split("/")[1];
  const path = `import { ${nameComponent} } from "${packageName}";`;

  return <Source language="js" code={path} />;
};

export default ImportCopy;
