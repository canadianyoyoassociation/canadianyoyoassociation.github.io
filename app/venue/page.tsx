import { Metadata } from "next";
import Link from "next/link";
import { Figure, FigureCaption, FigureImage } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Venue",
};

const Venue = () => {
  return (
    <>
      <h1>Calgary Central Library</h1>

      <p className="text-center">
        800 3 St SE, Calgary, AB, T2G 2E7
        <br />
        <Link
          href="https://calgarylibrary.ca/read-learn-and-explore/central-library/"
          target="_blank"
        >
          Central Library Website Link
        </Link>
      </p>
      <Figure>
        <Link
          href="https://calgarylibrary.ca/read-learn-and-explore/central-library/"
          target="_blank"
        >
          <FigureImage
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/2024/CL.jpg`}
            alt="Central Library Calgary"
          />
        </Link>
        <FigureCaption>Image Source: Central Library</FigureCaption>
      </Figure>

      <p>
        2026 Canadian Nationals will be at the Central Library. The venue is
        known for its aesthetics and ease of access thanks to its location
        nearby the Westbound and Eastbound City Hall/Bow Valley College train
        stations. The event will be held in the{" "}
        <strong>Performance Hall</strong> located on the first floor of the
        library.
      </p>

      <p>
        See their{" "}
        <Link
          href="https://calgarylibrary.ca/your-library/locations/cent/"
          target="_blank"
        >
          HOURS & LOCATION
        </Link>{" "}
        page for the address and directions.
      </p>

      <Figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1254.2028367704256!2d-114.05646154578477!3d51.04559677713375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170003cb69fe3%3A0x65642e5fb9371572!2sCentral%20Library!5e0!3m2!1sen!2sus!4v1710486724626!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <FigureCaption>
          Google Maps:{" "}
          <Link
            href="https://maps.app.goo.gl/wS3k7QYe9vm4eV4H9"
            target="_blank"
          >
            https://maps.app.goo.gl/wS3k7QYe9vm4eV4H9
          </Link>
        </FigureCaption>
      </Figure>

      <h1>Patricia A. Whelan Performance Hall</h1>
      <p>
        Past the main entrance, the performance hall will be on your left-hand
        side. As you walk into the performance hall, you will see the audience
        seats that are placed in a slope and look down at the stage. The
        performance hall is equipped with over 300 seats and has enough spaces
        for tables with vendors and products.
      </p>
      <Figure>
        <FigureImage
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/2024/PerfHall_sm.jpg`}
          alt="Performance Hall"
        />
        <FigureCaption>Image Source: Central Library</FigureCaption>
      </Figure>
      <p>
        Our walkthrough video shows how you can get to the performance hall from
        the City Hall station.
      </p>

      <Figure>
        <video width="100%" controls muted>
          <source src="https://i.imgur.com/wSI96Ma.mp4" type="video/mp4" />
        </video>
      </Figure>

      <h1>Parking</h1>
      <p>
        Street parking is available near the library and will be free on the
        contest day. While there are a couple of parking lots nearby, they allow
        parking for 2 hours maximum for $4 at a time.
      </p>
      <p>
        <strong>Street parking is recommended.</strong>
      </p>
      <p>
        All blue circles indicate the street parking locations. Please click on
        the image or the link below to open the interactive web map where you
        can click and check the detail for each street parking lane.
      </p>
      <Figure>
        <Link href="https://arcg.is/8DLaX" target="_blank">
          <FigureImage
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/2024/parking.png`}
            alt="Parking Illustration"
          />
        </Link>
        <FigureCaption>
          <Link href="https://arcg.is/8DLaX" target="_blank">
            Calgary On-street Parking Map
          </Link>
        </FigureCaption>
      </Figure>

      {
        // <h1>Weather Forecast</h1>
        // <p>
        //   As of May 15th, it is expected that Calgary will have a temperature
        //   range that is fairly low, swinging between 12C (54F) and as low as 2C
        //   (36F) over the weekend. Some layers and a jacket will be recommended.
        //   Please click on the image or the link below to open the weather forecast
        //   page.
        // </p>
        // <Figure>
        //   <Link
        //     href="https://weather.gc.ca/city/pages/ab-52_metric_e.html"
        //     target="_blank"
        //   >
        //     <FigureImage
        //       src={`${process.env.NEXT_PUBLIC_BASE_PATH}/2024/weather.png`}
        //       alt="Weather Forecast"
        //     />
        //   </Link>
        //   <FigureCaption>
        //     <Link
        //       href="https://weather.gc.ca/city/pages/ab-52_metric_e.html"
        //       target="_blank"
        //     >
        //       Calgary Weather Forecast provided by Government of Canada
        //     </Link>
        //   </FigureCaption>
        // </Figure>
      }
    </>
  );
};

export default Venue;
