import { ChevronRightIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./face-page.module.css";
import ProjectIcon from "./project-icon";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate from '@docusaurus/Translate'
import Link from '@docusaurus/Link'


const noteStyle: React.CSSProperties = {
  // fontSize: '.9em',
  // fontWeight: 600,
  // color: '#0E75DD',
  // textAlign: 'center',
  // paddingBottom: '13px',
  // textDecoration: 'underline',
  // height: '100',
}
// const noteStyle2: React.CSSProperties = {
//   // fontSize: '.9em',
//   // fontWeight: 600,
//   color: '#f9e6a9',  //c084fc b671fc a34cfb
//   // textAlign: 'center',
//   // paddingBottom: '13px',
//   // textDecoration: 'underline',
//   // height: '100',
//   border: '1px solid #f9e6a9',
// }

const noteStyle2: React.CSSProperties = {
  color: 'var(--note-color)',
  border: '1px solid var(--note-color)',
};

export default function FacePage(): JSX.Element {
  const command = "pip install torchpipe";
  const { siteConfig } = useDocusaurusContext()
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    let t: NodeJS.Timeout;
    if (copied) {
      t = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    return () => {
      t && clearTimeout(t);
    };
  }, [copied]);

  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--12 margin-vert--xl">
            <a
              href="https://g.hz.netease.com/deploy/torchpipe/-/tree/master"
              target="_blank"
              rel="noreferrer"
              className={styles.callout}
            >
              <span className="badge badge--primary callout__badge">NEW</span>
              <span className={styles.callout__text}>get source code from gitlab!</span>
              <ChevronRightIcon className={styles.callout__icon} aria-hidden="true" />
            </a>
            <h2 className={styles.slogan}>
              <span  style={{ marginBottom: '10px' }}><Translate id="home.tagline0">Serving Inside Pytorch</Translate></span>
              <span className={styles.slogan__highlight}><Translate id="home.tagline1">with Multiple Threads</Translate></span>
            </h2>
            <p className={styles.description}>
              <Translate id="siteConfig.tagline">{siteConfig.tagline}</Translate>
              {/* torchpipe try to help eliminating the gap between model training and ensemble pipeline serving. */}
            </p>
            <div className="padding-vert--md row">
              <div className="col col--5">
                {/* <a href="/docs/preface" className="button button--lg button--block button--primary">
                  Get Started
                </a> */}
                 <Link
                    className={clsx(
                      "button button--lg button--block button--primary"
                    )}
                    to="/docs/welcome"  
                    style={noteStyle}
                >Get Started</Link>
              </div>
              {/* <div className="col col--5">
                <CopyToClipboard
                  text={command}
                  onCopy={() => {
                    setCopied(true);
                  }}
                >
                  <button
                    className={clsx(
                      "button button--lg button--block button--outline button--secondary",
                      styles.command
                    )}
                  >
                    <span className={styles.command__text}>
                      <span aria-hidden="true">$</span> {command}
                    </span>
                    <DocumentDuplicateIcon className={styles.command__icon} />
                  </button>
                </CopyToClipboard>
              </div> */}
              <div className="col col--5">
                {/* <a href="/docs/preface" className="button button--lg button--block button--primary">
                  Get Started
                </a> */}
                 <Link
                    className={clsx(
                      "button button--lg button--block button--outline button--secondary"
                    )}
                    to="/docs/python/pipe"  
                    style={noteStyle2}
                >API Reference</Link>
              </div>
              
            </div>
          </div>
          <div className="col col--1">
            <div className={styles.illustration}>
              <div
                className={styles.illustration__container}
                // style={{ backgroundImage: 'url("/images/background/animate.svg")' }}
              >
                {/* <ProjectIcon className={styles.illustration__svg} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// export default function FacePage(): JSX.Element {
//   const command = "pip install torchpipe";
//   const { siteConfig } = useDocusaurusContext()
//   const [copied, setCopied] = useState(false);
//   useEffect(() => {
//     let t: NodeJS.Timeout;
//     if (copied) {
//       t = setTimeout(() => {
//         setCopied(false);
//       }, 3000);
//     }
//     return () => {
//       t && clearTimeout(t);
//     };
//   }, [copied]);

//   return (
//     <section className="padding-vert--xl">
//       <div className="container">
//         <div className="row">
//           <div className="col col--8 margin-vert--xl">
//             <a
//               href="https://g.hz.netease.com/deploy/torchpipe/-/tree/master"
//               target="_blank"
//               rel="noreferrer"
//               className={styles.callout}
//             >
//               <span className="badge badge--primary callout__badge">NEW</span>
//               <span className={styles.callout__text}>get source code from gitlab!</span>
//               <ChevronRightIcon className={styles.callout__icon} aria-hidden="true" />
//             </a>
//             <h1 className={styles.slogan}>
//               <span><Translate id="home.tagline0">Serving Inside Pytorch</Translate></span>
//               <span className={styles.slogan__highlight}><Translate id="home.tagline1">with Multiple Threads</Translate></span>
//             </h1>
//             <p className={styles.description}>
//               <Translate id="siteConfig.tagline">{siteConfig.tagline}</Translate>
//               {/* torchpipe try to help eliminating the gap between model training and ensemble pipeline serving. */}
//             </p>
//             <div className="padding-vert--md row">
//               <div className="col col--5">
//                 {/* <a href="/docs/preface" className="button button--lg button--block button--primary">
//                   Get Started
//                 </a> */}
//                  <Link
//                     className={clsx(
//                       "button button--lg button--block button--primary"
//                     )}
//                     to="/docs/preface"  
//                     style={noteStyle}
//                 >Get Started</Link>
//               </div>
//               <div className="col col--5">
//                 <CopyToClipboard
//                   text={command}
//                   onCopy={() => {
//                     setCopied(true);
//                   }}
//                 >
//                   <button
//                     className={clsx(
//                       "button button--lg button--block button--outline button--secondary",
//                       styles.command
//                     )}
//                   >
//                     <span className={styles.command__text}>
//                       <span aria-hidden="true">$</span> {command}
//                     </span>
//                     <DocumentDuplicateIcon className={styles.command__icon} />
//                   </button>
//                 </CopyToClipboard>
//               </div>
//             </div>
//           </div>
//           <div className="col col--4">
//             <div className={styles.illustration}>
//               <div
//                 className={styles.illustration__container}
//                 style={{ backgroundImage: 'url("/images/background/animate.svg")' }}
//               >
//                 <ProjectIcon className={styles.illustration__svg} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }