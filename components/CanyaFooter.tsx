"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Col, Container, Image, Row } from "react-bootstrap";

import { Sponsor, sponsorsGold, sponsorsSilver } from "@/components/sponsors";
import useWindowWidth from "@/components/useWindowWidth";
import { useEffect, useState } from "react";

/**
 * Fisher–Yates shuffle
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#JavaScript_implementation
 * @param arr array to shuffle
 * @returns shuffled array
 */
function shuffleArray(arr: any[]) {
  for (let i = arr.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderSponsor(sponsor: Sponsor, scale: number, className: string) {
  return (
    <Link
      key={sponsor.name}
      className={className}
      href={sponsor.url}
      target="_blank"
    >
      <Image
        src={sponsor.img}
        alt={sponsor.name}
        width={`${scale * sponsor.size}px`}
        className={className}
      />
    </Link>
  );
}

function renderSponsorsLarge(
  gold: Sponsor[],
  silver: Sponsor[],
  windowWidth?: number,
) {
  let scaleGold = 0.6;
  let scaleSilver = 0.3;

  if (windowWidth && windowWidth < 768) {
    scaleGold = 0.36;
    scaleSilver = 0.24;
  }

  return (
    <Col>
      <h1>Sponsors</h1>
      <div className="mb-4">
        {gold.map((sponsor) => renderSponsor(sponsor, scaleGold, "large-gold"))}
      </div>
      <div>
        {silver.map((sponsor) =>
          renderSponsor(sponsor, scaleSilver, "large-silver"),
        )}
      </div>
    </Col>
  );
}

function renderSponsorsSmall(gold: Sponsor[]) {
  return (
    <Col>
      <h2>Gold Sponsors</h2>
      {gold.map((sponsor) => renderSponsor(sponsor, 0.25, "small-gold"))}
    </Col>
  );
}

export default function CanyaFooter() {
  const pathname = usePathname();
  const windowWidth = useWindowWidth();

  const [gold, setGold] = useState(sponsorsGold);
  const [silver, setSilver] = useState(sponsorsSilver);
  useEffect(() => {
    setGold(shuffleArray([...sponsorsGold]));
    setSilver(shuffleArray([...sponsorsSilver]));
  }, [pathname]);

  return (
    <footer className="bg-light py-4 mt-4">
      <Container>
        <Row className="text-center">
          {
            // Distinguish between home page and other pages
            new Set(["/", "/index", "/index.html"]).has(pathname)
              ? renderSponsorsLarge(gold, silver, windowWidth)
              : renderSponsorsSmall(gold)
          }
        </Row>
      </Container>
    </footer>
  );
}
