import { FC } from "react";
import { createPortal } from "react-dom";

const content = document.getElementById("float");

const Portals: FC = ({ children }) => createPortal(children, content!);

export default Portals;
