function Revenue({ notice, data }) {
  return (
    <>
      <div className="bg-blue-500 text-yellow-200">수입</div>
      <div className="m-6 h-2/6">
        {
          notice.map((item, idx) => {
            return (
              <div className="text-left font-bold" key={idx}>
                * {item.text}
              </div>
            );
          })
        }
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th colSpan={6}>&nbsp;</th>
            <th colSpan={2}><button className="bg-gray-300 w-full">수정</button></th>
          </tr>
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
            data.map((item, idx) => {
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
    </>
  )
}

Revenue.defaultProps = {
  notice: [],
  data: []
}

export default Revenue;