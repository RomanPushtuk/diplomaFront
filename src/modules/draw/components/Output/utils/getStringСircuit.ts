export function getStringСircuit(elements: Array<any>) {
  let outputs: Array<any> = [];

  const connections: Array<string> = [];

  Object.keys(elements).forEach((key: string) => {
    // @ts-ignore
    elements[key].outputs.forEach((output: any) => {
      outputs.push(output);
    });
  });

  outputs = outputs.filter((output: any) => {
    return output.connections.length > 0;
  });

  outputs.forEach((output: any) => {
    const type1 = output.element.getType();
    const params1 = output.element.getStringProperty();
    const outputId1 = output.number;

    output.connections.forEach((output: any) => {
      const type2 = output.element.getType();
      const params2 = output.element.getStringProperty();
      const outputId2 = output.number;
      const connect = `${type1}${params1}.output${outputId1}=${type2}${params2}.output${outputId2}`;

      connections.push(connect);
    });
  });

  return connections;
}
