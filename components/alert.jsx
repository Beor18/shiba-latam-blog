import ContainerComponent from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";

const Alert = ({ preview }) => {
  return (
    <div
      className={cn("", {
        "": preview,
        "": !preview,
      })}
    >
      <ContainerComponent>
        <div className="">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className=""
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={``}
                className=""
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </ContainerComponent>
    </div>
  );
};

export default Alert;
