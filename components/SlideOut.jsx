import CloseIcon from "@material-ui/icons/Close";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), {
  loading: () => <p></p>,
});

const Slideout = ({ onCancel, open }) => {
  return (
    <>
      <div className={`Modal ${open ? "Show" : ""} box_shad`}>
        <Image
          src="/assets/gradient_crop_bg.png"
          alt=""
          layout="fill"
          quality={40}
          priority={true}
        />

        <div className="Close" onClick={onCancel}>
          <CloseIcon />
        </div>
        <div>
          <Image
            src={"/assets/goodLightLogo.png"}
            alt=""
            layout="responsive"
            width={265}
            height={88}
            priority={true}
          />

          <div className="pop_wrap">
            <p className="pop_text">beauty beyond the binary</p>
          </div>
          <div
            className="popup-action"
            style={{ width: "100%", padding: "0px" }}
          >
            <a
              className="white"
              target="_blank"
              href="https://goodlight.world/"
              style={{ maxWidth: "unset", padding: "0px" }}
              rel="noreferrer"
            >
              <p className="box_shad">
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">SHOP</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideout;
