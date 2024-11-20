import dayjs from "dayjs";
import React from "react";

export const TransformDeadline = (deadline) => {
  const today = dayjs(); // 오늘 날짜
  const deadlineDate = dayjs(deadline); // 마감 기한
  const diff = deadlineDate.diff(today, "day"); // 날짜 차이 계산

  // 디데이 계산
  const dDay =
    diff === 0 ? "D-day" : `D${diff > 0 ? `-${diff}` : `+${Math.abs(diff)}`}`;

  return (
    <span> {dDay}</span> // 디데이 추가
  );
};
