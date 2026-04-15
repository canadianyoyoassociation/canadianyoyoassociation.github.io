"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button, FormCheck, FormSelect } from "react-bootstrap";

// Fees (CAD): early bird vs regular
const FEES = {
  early: { junior: 35, international: 40, oneA: 45, open: 45, combo: 80 },
  norm: { junior: 50, international: 55, oneA: 65, open: 65, combo: 120 },
  late: { junior: 70, international: 80, oneA: 90, open: 90, combo: 160 },
} as { [key: string]: { [key: string]: number } };

const Register = () => {
  // Early bird ends after May 1, 2026
  const IS_EARLY_BIRD = new Date() < new Date("2026-05-02T00:00:00");
  // Regular registration ends after May 11, 2026
  const IS_REGULAR = new Date() < new Date("2026-05-12T00:00:00");
  // Registration ends after May 15, 2026
  const REGISTRATION_DISABLED = new Date() >= new Date("2026-05-16T00:00:00");

  const fees = IS_EARLY_BIRD ? FEES.early : IS_REGULAR ? FEES.norm : FEES.late;

  const [junior, setJunior] = useState(false);
  const [intl, setIntl] = useState(false);
  const [caOneA, setCaOneA] = useState(false);
  const [caOpen, setCaOpen] = useState(false);

  const [intlStyle, setIntlStyle] = useState("");
  const [caOpenStyle, setCaOpenStyle] = useState("");

  // Price calculation
  let total = 0;
  let itemName = "INVALID REGISTRATION";
  if (junior) {
    total = fees.junior;
    itemName = "Divisions - Junior";
  } else if (intl) {
    total = fees.international;
    itemName = `Divisions - International (${intlStyle})`;
  } else if (caOneA && caOpen) {
    total = fees.combo;
    itemName = `Divisions - 1A, Open (${caOpenStyle})`;
  } else if (caOneA) {
    total = fees.oneA;
    itemName = "Divisions - 1A";
  } else if (caOpen) {
    total = fees.open;
    itemName = `Divisions - Open (${caOpenStyle})`;
  }

  const handlePaymentSubmit = (e: FormEvent) => {
    if (total <= 0) {
      e.preventDefault();
      alert("Please select at least one division to enter.");
      return;
    }
    if (caOpen && caOpenStyle === "") {
      e.preventDefault();
      alert("Please select a style for your Open division routine.");
      return;
    }
    if (intl && intlStyle === "") {
      e.preventDefault();
      alert("Please select a style for your International division routine.");
      return;
    }
  };

  return (
    <>
      <h1>Registration</h1>

      <p>
        Registration is <b>mandatory</b> for all contestants entering Junior,
        International, Championship 1A, and Open divisions.{" "}
        <b>Spectators may attend the event for free.</b>
      </p>

      <p>Registration involves two steps:</p>
      <ol>
        <li>Paying registration fee</li>
        <li>Uploading music</li>
      </ol>

      <p>
        These two steps can be completed separately any time before the contest,
        but please keep the following deadlines in mind.{" "}
        <b>After each deadline is past, the registration fee will increase.</b>
      </p>

      <div className="table-responsive text-center d-flex justify-content-center mt-4">
        <table className="table align-middle table-hover table-striped table-bordered w-auto">
          <tbody>
            <tr className={IS_EARLY_BIRD ? "" : "text-decoration-line-through"}>
              <td>
                <b>Early bird deadline</b>
              </td>
              <td>May 1, 2026</td>
            </tr>
            <tr className={IS_REGULAR ? "" : "text-decoration-line-through"}>
              <td>
                <b>Regular deadline</b>
              </td>
              <td>May 11, 2026</td>
            </tr>
            <tr
              className={
                REGISTRATION_DISABLED ? "text-decoration-line-through" : ""
              }
            >
              <td>
                <b>Late deadline (final)</b>
              </td>
              <td>May 15, 2026</td>
            </tr>
            <tr>
              <td colSpan={2} className="small">
                No fees or music will be accepted on May 16th and 17th.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1>Step 1: Registration fee</h1>
      <p>
        Please review the event <Link href="/format">format</Link> and your{" "}
        <Link href="/faq">eligibility</Link> carefully, and select the
        division(s) you'd like to enter. Then click "Fee payment" to be brought
        to the payment processing page.
      </p>
      <ul>
        <li>
          You can have someone else (parent, friend, etc) pay for you. In step 2
          below, you will enter the actual contestant's information.
        </li>
        <li>
          Payment is processed by PayPal, but you can pay as a guest using a
          credit card without a PayPal account.
        </li>
        <li>
          If this does not work, please{" "}
          <a href="mailto:jchoi4524@gmail.com">contact the organizer</a> for
          alternatives.
        </li>
      </ul>
      <p>
        Note: Enter both Championship 1A and Open to receive a combo discount!
      </p>

      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        onSubmit={handlePaymentSubmit}
      >
        <input type="hidden" name="business" value="wayne.ngan@gmail.com" />
        <input type="hidden" name="cmd" value="_xclick" />
        <input type="hidden" name="item_name" value={itemName} />
        <input type="hidden" name="amount" value={total} />
        <input type="hidden" name="currency_code" value="CAD" />

        <div className="table-responsive">
          <table className="table align-middle table-hover table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">Division</th>
                <th scope="col">Fee (CAD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FormCheck
                    type="checkbox"
                    id="1a-div"
                    label={<>🇨🇦 Championship 1A</>}
                    checked={caOneA}
                    disabled={REGISTRATION_DISABLED || junior || intl}
                    onChange={(e) => {
                      setCaOneA(e.target.checked);
                      if (e.target.checked) {
                        setJunior(false);
                        setIntl(false);
                      }
                    }}
                  />
                </td>
                <td>${fees.oneA}</td>
              </tr>
              <tr>
                <td>
                  <FormCheck
                    type="checkbox"
                    id="open-div"
                    label={
                      <>
                        🇨🇦 Championship Open{" "}
                        <FormSelect
                          size="sm"
                          style={{ width: "auto", display: "inline-block" }}
                          value={caOpenStyle}
                          onChange={(e) => setCaOpenStyle(e.target.value)}
                          disabled={REGISTRATION_DISABLED || !caOpen}
                        >
                          {["", "2A", "3A", "4A", "5A"].map((s) => (
                            <option key={s} value={s}>
                              {s === "" ? "Style" : s}
                            </option>
                          ))}
                        </FormSelect>
                      </>
                    }
                    checked={caOpen}
                    disabled={REGISTRATION_DISABLED || junior || intl}
                    onChange={(e) => {
                      setCaOpen(e.target.checked);
                      if (e.target.checked) {
                        setJunior(false);
                        setIntl(false);
                      }
                    }}
                  />
                </td>
                <td>${fees.open}</td>
              </tr>
              <tr>
                <td>
                  <FormCheck
                    type="checkbox"
                    id="int-div"
                    label={
                      <>
                        International{" "}
                        <FormSelect
                          size="sm"
                          style={{ width: "auto", display: "inline-block" }}
                          value={intlStyle}
                          onChange={(e) => setIntlStyle(e.target.value)}
                          disabled={REGISTRATION_DISABLED || !intl}
                        >
                          {["", "1A", "2A", "3A", "4A", "5A"].map((s) => (
                            <option key={s} value={s}>
                              {s === "" ? "Style" : s}
                            </option>
                          ))}
                        </FormSelect>
                      </>
                    }
                    checked={intl}
                    disabled={
                      REGISTRATION_DISABLED || caOneA || caOpen || junior
                    }
                    onChange={(e) => {
                      setIntl(e.target.checked);
                      if (e.target.checked) {
                        setCaOneA(false);
                        setCaOpen(false);
                        setJunior(false);
                      }
                    }}
                  />
                </td>
                <td>${fees.international}</td>
              </tr>
              <tr>
                <td>
                  <FormCheck
                    type="checkbox"
                    id="junior-div"
                    label="Junior"
                    checked={junior}
                    disabled={REGISTRATION_DISABLED || caOneA || caOpen || intl}
                    onChange={(e) => {
                      setJunior(e.target.checked);
                      if (e.target.checked) {
                        setCaOneA(false);
                        setCaOpen(false);
                        setIntl(false);
                      }
                    }}
                  />
                </td>
                <td>${fees.junior}</td>
              </tr>
              <tr className="table-light fw-bold">
                <td>
                  Total (CAD){" "}
                  {caOneA && caOpen && (
                    <span className="small text-muted">
                      - combo discount applied!
                    </span>
                  )}
                </td>
                <td>${total}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="d-flex pb-4" style={{ justifyContent: "center" }}>
          <Button
            type="submit"
            disabled={
              REGISTRATION_DISABLED ||
              total <= 0 ||
              (caOpen && caOpenStyle === "") ||
              (intl && intlStyle === "")
            }
          >
            Fee payment
          </Button>
        </div>
      </form>

      <h1>Step 2: Music upload</h1>
      <p>
        In this step you will enter your contestant information and upload the
        music for your routine(s).
      </p>
      <p>
        {/* Please note that music upload now requires a <b>late fee of $30</b>. */}
        Music upload/change is currently free. However, music submission{" "}
        <b>after May 11th</b> will incur an extra fee of $30 CAD.
      </p>
      <p>
        The final deadline for submitting music is <b>May 15th</b>. No music
        will be accepted on the day of the contest.
      </p>

      {/* <p>
        Music upload/change now requires an additional fee of <b>$30 CAD</b>.
        Please <a href="mailto:jchoi4524@gmail.com">contact the organizer</a>{" "}
        for arrangements to pay this fee, otherwise your new submission will not
        apply.
      </p> */}
      <div className="d-flex pb-4" style={{ justifyContent: "center" }}>
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSfqBD7f6uP_HcJRfJEE1xo3AjELmrhVsK2xZ95D_rK7pOOUCA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Upload music
        </Button>
      </div>

      <h1>That's it!</h1>
      <p>
        Once you have paid your fee and uploaded your music, your registration
        is complete. For the latest updates or any questions, please find CANYA
        on social media!
      </p>
      <div className="d-flex pb-3" style={{ justifyContent: "center" }}>
        <Button
          href="https://linktr.ee/canadianyoyoassociation"
          target="_blank"
        >
          @canadianyoyoassociation
        </Button>
      </div>
    </>
  );
};

export default Register;
