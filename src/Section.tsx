import React from "react";
import { Element } from "react-scroll";

interface Props  {
    navName: string;
    children: React.ReactNode;
};

const Section: React.FC<Props> = (props: Props) => {
    return <Element name={props.navName} className="Section">{props.children}</Element>
};

export default Section;
