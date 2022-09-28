export default function Home() {
  const notice = [
    { idx: 0, text: '운동화는 하루 총 수익을 따로 계산해서 적으세요 (받은 금액 - 업체에 보낸 금액)' },
    { idx: 1, text: '수선은 하루 총 합을 적으세요' },
    { idx: 2, text: '외상은 외상 해준 세탁비를 적으세요 (본사에 보낸 금액이 아닌 받아야 할 금액)' },
  ];

  const tempData = [
    { idx: 0, date: '2022.09.01', laundry_revenue: 182000, send: 109200, repair: 56000, credit: 0, material_cost: 0, etc: 0, total_cost: 300000 },
    { idx: 1, date: '2022.09.02', laundry_revenue: 182000, send: 109200, repair: 56000, credit: 0, material_cost: 0, etc: 0, total_cost: 300000 },
    { idx: 2, date: '2022.09.03', laundry_revenue: 182000, send: 109200, repair: 56000, credit: 0, material_cost: 0, etc: 0, total_cost: 300000 },
  ]

  return (
    <div className="flex w-auto">
      <div className="basis-1/2 text-center m-5 w-auto">
        <div className="bg-blue-500 text-yellow-200">수입</div>
        <table className="w-full">
          <thead>
            <tr><th>&nbsp;</th></tr>
            {
              notice.map((item, idx) => {
                return (
                  <tr className="text-left" key={idx}>
                    <th></th>
                    <th colSpan={6}>
                      * {item.text}
                    </th>
                    <th></th>
                  </tr>
                );
              })
            }
            <tr><th>&nbsp;</th></tr>
            <tr>
              <th className="border border-black"></th>
              <th className="border border-black bg-green-200">세탁 수익</th>
              <th className="border border-black bg-sky-200">보내야 할 돈</th>
              <th className="border border-black bg-green-200">수선</th>
              <th className="border border-black bg-sky-200">외상</th>
              <th className="border border-black bg-sky-200">재료비</th>
              <th className="border border-black bg-sky-200">기타</th>
              <th className="border border-black bg-yellow-100">오늘 수익</th>
            </tr>
          </thead>
          <tbody>
            {
              tempData.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td className="border border-black">{item.date}</td>
                    <td className="border border-black">{item.laundry_revenue}</td>
                    <td className="border border-black">{item.send}</td>
                    <td className="border border-black">{item.repair}</td>
                    <td className="border border-black">{item.credit}</td>
                    <td className="border border-black">{item.material_cost}</td>
                    <td className="border border-black">{item.etc}</td>
                    <td className="border border-black">{item.total_cost}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className="basis-1/4 text-center m-5">지출</div>
      <div className="basis-1/4 text-center m-5">수익</div>
      <div className="basis-1/4 text-center m-5">외상</div>
    </div>
  )
}
