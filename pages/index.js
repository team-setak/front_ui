import dayjs from "dayjs";
import Expend from "../components/expend";
import Revenue from "../components/revenue";

export default function Home() {
  const noticeRevenue = [
    { idx: 0, text: '운동화는 하루 총 수익을 따로 계산해서 적으세요 (받은 금액 - 업체에 보낸 금액)' },
    { idx: 1, text: '수선은 하루 총 합을 적으세요' },
    { idx: 2, text: '외상은 외상 해준 세탁비를 적으세요 (본사에 보낸 금액이 아닌 받아야 할 금액)' },
  ];

  const noticeExpend = [
    { idx: 0, text: '월단위로 입력하세요' },
  ]

  const tempData = [
    { idx: 0, date: '2022.09.01', laundry_revenue: 182000, send: 109200, repair: 56000, credit: 0, material_cost: 0, etc: 0, total_cost: 300000 },
    { idx: 1, date: '2022.09.02', laundry_revenue: 182000, send: 109200, repair: 56000, credit: 0, material_cost: 0, etc: 0, total_cost: 300000 },
    { idx: 2, date: '2022.09.03', laundry_revenue: 182000, send: 109200, repair: 56000, credit: 0, material_cost: 0, etc: 0, total_cost: 300000 },
  ];

  const tempExpendData = [
    { idx: 0, title: '카드 리더기', cost: 11000 },
    { idx: 1, title: '공과금', cost: 0 },
    { idx: 2, title: '월세', cost: 500000 },
    { idx: 3, title: '화재 보험료', cost: 50000 },
    { idx: 4, title: '정수기', cost: 40000 },
  ]

  return (
    <div className="flex w-auto">
      <div className="basis-1/2 text-center m-5 w-auto">
        <Revenue notice={noticeRevenue} data={tempData} />
      </div>
      <div className="basis-1/4 text-center m-5">
        <Expend notice={noticeExpend} data={tempExpendData} />
      </div>
      <div className="basis-1/4 text-center m-5">수익</div>
      <div className="basis-1/4 text-center m-5">외상</div>
    </div>
  )
}
