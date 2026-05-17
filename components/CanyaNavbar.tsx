"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Image, Nav, Navbar } from "react-bootstrap";

const paths = [
  { name: "About", href: "/", active: new Set(["/", "/index", "/index.html"]) },
  { name: "Venue", href: "/venue", active: new Set(["/venue", "/venue.html"]) },
  {
    name: "Schedule",
    href: "/schedule",
    active: new Set(["/schedule", "/schedule.html"]),
  },
  {
    name: "Format",
    href: "/format",
    active: new Set(["/format", "/format.html"]),
  },
  { name: "FAQ", href: "/faq", active: new Set(["/faq", "/faq.html"]) },
  {
    name: "Register",
    href: "/register",
    active: new Set(["/register", "/register.html"]),
  },
  {
    name: "Results",
    href: "/results",
    active: new Set(["/results", "/results.html"]),
  },
];

const CanyaNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand" as={Link}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/canya-logo.png`}
            alt="2026 Canadian Nationals Logo"
            height={35}
            // recolour to white
            style={{ filter: "brightness(0) invert(1)", marginLeft: "0.5rem" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="canya-navbar-nav" />
        <Navbar.Collapse id="canya-navbar-nav">
          <Nav className="me-auto">
            {paths.map((path) => (
              <Nav.Link
                key={path.href}
                href={path.href}
                //
                // trailing slashes removed in next.config.ts
                active={path.active.has(pathname)}
                //
                // fix react-bootstrap not reading base path
                // https://github.com/react-bootstrap/react-bootstrap/issues/4131#issuecomment-551964379
                as={Link}
              >
                {path.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CanyaNavbar;
