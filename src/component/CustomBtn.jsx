import { useEffect, useState } from "react";
import { DotLoading } from "antd-mobile";
import "../style/component/CustomBtn.css";
import { getCountdown } from "../tool/index";
import dayjs from "dayjs";

function CustomBtn({
  loading,
  onClick,
  onCountdownEnd,
  countdown,
  text,
  tip,
  disable,
  size = "middle",
  type = "default",
}) {
  const [timeStr, setTimStr] = useState("");
  useEffect(() => {
    if (countdown) {
      const endTime = dayjs().add(countdown, "s");
      const timer = setInterval(() => {
        const str = getCountdown(endTime)
        setTimStr(str);
        if (!str) {
          clearInterval(timer);
          onCountdownEnd && onCountdownEnd()
        }
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [countdown]);
  return (
    <div
      className={`btn_box ${size} ${type} ${disable ? "disable" : ""} ${loading ? "loading" : ""}`}
      onClick={() => {
        disable ? () => { } : onClick && onClick();
      }}
    >
      <span className="loading_icon">
        <DotLoading />
      </span>
      <div className="btn_body">
        <div className="txt">{`${text}${countdown ? ` ${timeStr}` : ""}`}</div>
        {tip && <div className="tip">{tip}</div>}
      </div>
    </div>
  );
}

export default CustomBtn;
