import parse, { domToReact, attributesToProps } from "html-react-parser";

import styles from "./ScrollMessage.module.scss";

import { getRibbonLinks } from "@/utils/ApiUtils";

export default function ScrollMessage({ onClickMethod }) {

  async function getRibbon() {
    const res = await getRibbonLinks();

    let ribbonLinks = [];
    parse(res.content, {
      replace: (domNode) => {
        if (domNode.tagName === "a")
          ribbonLinks.push({
            title: domToReact(domNode.childNodes),
            src: attributesToProps(domNode.attribs).href,
          });
      },
    });
  }

  return (
    <div className={styles.messageStrip}>
      <div className={styles.messageContainer}>
        <div className={styles.slider}>
          {[...Array(6).keys()].map((i) => {
            return (
              <a
                href="https://news.ccsbikaner.in/2023/12/invitation-for-applications-vacant.html"
                target="_Blank"
                rel="noreferrer"
                key={i}
              >
                Invitation for Applications: Vacant Seats Available for Session 2023-24
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
