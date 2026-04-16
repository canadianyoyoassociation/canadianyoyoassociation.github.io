import { Metadata } from "next";
import Link from "next/link";
import { Alert, Table } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Format",
};

export default function Format() {
  return (
    <>
      <h1>Canadian Championship Division Freestyles</h1>
      <p>
        Canadian residents of all ages and skill levels are eligible to compete
        in the Canadian Championship Divisions, which are the 1A and Open
        divisions. Please see the <Link href="/faq">FAQ</Link> to check your
        eligibility to compete in a Canadian Championship Division.
      </p>
      <p>Winners will be seeded to the 2026 World Yo-yo contest.</p>
      <p>
        Each contestant will perform a freestyle routine choreographed to music
        up to the following lengths in each division/round:
        {/* Previously "up to the for the following lengths in each division/round:" */}
      </p>
      <Table className="my-4" striped bordered hover>
        <thead>
          <tr>
            <th>Division</th>
            <th>Freestyle Length</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1A Preliminary</td>
            <td>1 Minute</td>
          </tr>
          <tr>
            <td>1A Final</td>
            <td>3 Minutes</td>
          </tr>
          <tr>
            <td>Open</td>
            <td>3 Minutes</td>
          </tr>
        </tbody>
      </Table>
      <ul>
        <li>
          Each routine will be scored by a panel of judges according to the
          critera defined by IYYF from the{" "}
          <Link href="https://iyyf.org/wyyc2025-rules/">
            2025 World Yo-yo Contest
          </Link>
          .
        </li>
        <li>
          In the Open Division, each contestant must choose only ONE of the
          following styles:
          <ul>
            <li>2A: Looping trick freestyle with two responsive yo-yos</li>
            <li>3A: String Trick Freestyle with two long-spinning yo-yos</li>
            <li>4A: Freestyle with off string yo-yo(s)</li>
            <li>5A: Freestyle with counter-weight yo-yo(s)</li>
          </ul>
        </li>
        <li>
          Open Division contestants will choose their style during registration.
          Any tricks that are performed from a style other than the one chosen
          will not be scored.
        </li>
      </ul>
      <Alert variant="danger">
        <p>Contestants must upload their own music for their freestyle(s).</p>
        <p>
          Music choices MUST be appropriate for all audiences. Any form of
          inappropriate music is subject to disqualification.
        </p>
        <p>
          Please see{" "}
          <Link href="https://iyyf.org/wyyc2025-rules/2025-freestyle-music/">
            IYYF's Guidelines for Music Choice
          </Link>{" "}
          to determine if your music is appropriate.
        </p>
      </Alert>
      <h1>International Division Freestyles</h1>
      <p>
        Non-Canadian citizens or residents are welcome to compete in the
        {/* Previously "Non Canadian" */} International Division. Please see the{" "}
        <Link href="/faq">FAQ</Link> to determine if you are eligible to compete
        in the International Division.
      </p>
      <p>
        International Division freestyles will be a 3 minute freestyle (no
        preliminaries) where each contestant must choose ONE of the following
        styles:
      </p>
      <ul>
        <li>1A: String trick freestyle with one long-spinning yo-yo</li>
        <li>2A: Looping trick freestyle with two responsive yo-yos</li>
        <li>3A: String Trick freestyle with two long-spinning yo-yos</li>
        <li>4A: Freestyle with off string yo-yo(s)</li>
        <li>5A: Freestyle with counter-weight yo-yo(s)</li>
      </ul>
      <p>
        Contestants will upload their own music and must also follow{" "}
        <Link href="https://iyyf.org/wyyc2025-rules/2025-freestyle-music/">
          IYYF's Guidelines for Music Choice
        </Link>
        .
      </p>
      <p>
        Winners of the International Division will not be seeded to the 2026
        World Yo-yo contest.
      </p>
      <h1>Junior Division Freestyles</h1>
      <p>
        The Junior Division is for young players of any nationality who want to
        experience the fun of performing on stage in a more relaxed format.
      </p>
      <p>
        In order to be eligible to compete in this division, the contestant must
      </p>
      <ul>
        <li>Be age 13 or younger as of May 17, 2026</li>
        <li>
          Have never advanced to a 1A finals of any National-level competition
        </li>
        <li>
          Not also enter a Canadian Championship Division or International
          Division
          {/* Previuosly "Not also enter a Canadian Championship or International division" */}
        </li>
      </ul>
      <p>
        Junior Division freestyles are 1 minute long, and only the 1A style of
        play is allowed. The scoring criteria is similar to the{" "}
        <Link href="https://iyyf.org/wyyc2025-rules/">
          2025 World Yoyo contest
        </Link>
        , but includes the following modifications in order to emphasize the
        performance aspect of the freestyles:
      </p>
      <ul>
        <li>
          Technical Execution (TE) and Freestyle Evaluation (FE) will each be
          50% of the final score
        </li>
        <li>
          There will be no negative points in TE, and there will be no major
          deductions
        </li>
        <li>
          Choreography (MU1) and Body Control (BDY) will be the only FE
          categories
        </li>
      </ul>
      <p>
        Contestants will upload their own music and must also follow{" "}
        <Link href="https://iyyf.org/wyyc2025-rules/2025-freestyle-music/">
          IYYF's Guidelines for Music Choice
        </Link>
      </p>
      <p>
        Winners of the Junior Division will not be seeded to the 2026 World
        Yo-yo contest.
      </p>
    </>
  );
}
