export default function Home() {
  return (
    <div className="flex w-auto">
      <div className="basis-1/2 text-center m-5 w-auto">
        <div>수입</div>
        <table className="w-full">
          <thead>
            <tr>
              <th>세탁 수익</th>
              <th>보내야 할 돈</th>
              <th>수선</th>
              <th>외상</th>
              <th>재료비</th>
              <th>기타</th>
              <th>오늘 수익</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div className="basis-1/4 text-center m-5">지출</div>
      <div className="basis-1/4 text-center m-5">수익</div>
      <div className="basis-1/4 text-center m-5">외상</div>
    </div>
  )
}
