import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import DefaultContent from "shared/components/molecules/DefaultContent";

const Mentions: FC<RouteComponentProps> = () => (
  <div>
    <DefaultContent
      title="No hay nada que ver aqui. Por ahora."
      subtitle="Cuando alguien te menciona, lo encontraras aqui"
    />
  </div>
);

export default Mentions;
