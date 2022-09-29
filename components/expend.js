import { useMemo } from "react";

function Expend({ notice, data }) {
  const totalCost = useMemo(() => {
    let tempTotalCost = 0;

    data.map((item, idx) => {
      tempTotalCost += item.cost;
    })

    return tempTotalCost;
  }, [data]);

  return (
    <>
      <div className="bg-blue-500 text-yellow-200">지출</div>
      <div className="m-6 h-2/6">
        {
          notice.map((item, idx) => {
            return (
              <div className="text-left font-bold" key={idx}>
                {item.text === '' ? '' : '*'} {item.text}
              </div>
            );
          })
        }
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th></th>
            <th><button className="bg-gray-300 w-full">수정</button></th>
          </tr>
        </thead>
        <tbody>
          {
            (data ?? []).map((item, idx) => {
              return (
                <tr key={idx}>
                  <td className="border border-black bg-sky-200">{item.title}</td>
                  <td className="border border-black bg-white">{item.cost}</td>
                </tr>
              )
            })
          }
          <tr>
            <td className="border border-black bg-purple-300">총합</td>
            <td className="border border-black bg-white">{totalCost}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

Expend.defaultProps = {
  notice: [],
  data: []
}

export default Expend;