import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';
import MainMenu from './MainMenu';

const MobileMenu = () => {
    const handleMobileMenu = () => {
        const dropdownLinks = document.querySelectorAll(
                ".popup-mobile-manu .mainmenu .has-dropdown > a"
            ),
            submenus = document.querySelectorAll(
                ".popup-mobile-manu .mainmenu .has-dropdown .axil-submenu"
            );

        let bootstrapJs;
        if (document !== undefined) {
            bootstrapJs = require("bootstrap");
        }

        submenus.forEach((item) => {
            item.classList.add("collapse");
        });

        dropdownLinks.forEach((item) => {
            const submenu = item.nextElementSibling;

            item.addEventListener("click", (e) => {
                e.preventDefault();
                const collapsedItem = new bootstrapJs.Collapse(submenu);
                collapsedItem.toggle();

                submenus.forEach((menu) => {
                    if (menu.classList.contains("show")) {
                        const openedCollapse = new bootstrapJs.Collapse(menu);
                        openedCollapse.toggle();
                    }
                });
            });
        });
    };

    const toggleMobileMenu = () => {
        const body = document.querySelector("body"),
            submenus = document.querySelectorAll(
                ".popup-mobile-manu .mainmenu .has-dropdown .axil-submenu"
            );

        body.classList.toggle("popup-mobile-manu-visible");

        let bootstrapJs;
        if (document !== undefined) {
            bootstrapJs = require("bootstrap");
        }

        submenus.forEach((menu) => {
            if (menu.classList.contains("show")) {
                const openedCollapse = new bootstrapJs.Collapse(menu);
                openedCollapse.toggle();
            }
        });
    };

    const closeMobileMenu = () => {
        const body = document.querySelector("body");
        body.classList.remove("popup-mobile-manu-visible");
        if (body.classList.contains(".popup-mobile-manu-visible")) {
        }
    }

    useEffect(() => {
        handleMobileMenu();

        // Close menu while navigate to another page
        Router.events.on('routeChangeStart', closeMobileMenu);
        return () => {
            Router.events.off('routeChangeStart', closeMobileMenu);
        }
    }, []);

    return (
      <div
        className="popup-mobile-manu"
        onClick={(e) => {
          if (e.target == document.querySelector(".popup-mobile-manu")) {
            toggleMobileMenu();
          }
        }}
      >
        <div className="inner">
          <div className="mobileheader">
            <div className="logo">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src={"/images/others/Nextdev Lab icon mark.svg"}
                    width="90"
                    height="40"
                  />
                </div>
                <div style={{}}>
                  <div
                    style={
                      {
                        // border: "1px solid green",
                      }
                    }
                  >
                    <text
                      id="Keystroke-Startup-la"
                      fontFamily="DMSans-Bold, DM Sans"
                      fontSize="20"
                      fontWeight="bold"
                     
                    >
                      <tspan
                        x="75"
                        y="24"
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        NextDev
                      </tspan>
                      <tspan
                        x="175.14"
                        y="24.5001221"
                        fontFamily="DMSans-Regular, DM Sans"
                        fontWeight="normal"
                      />
                      <tspan
                        x="76.16"
                        y="49.5001221"
                        fontFamily="DMSans-Regular, DM Sans"
                        fontSize="18"
                        fontWeight="normal"
                      >
                        <br />
                        Labs{" "}
                        {/* {variant === "two" ? "Small agency studio" : "Startup template"} */}
                      </tspan>
                    </text>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="close-menu"
              onClick={() => {
                toggleMobileMenu();
              }}
            ></button>
          </div>
          <div className="menu-item">
            <MainMenu />
          </div>
        </div>
      </div>
    );
};

export default MobileMenu;
