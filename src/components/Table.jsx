import React from "react";

export const Table = ({ data }) => {
  const takvim = data;

  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" className="text-warning fs-3">
                Vakit
              </th>
              <th scope="col" className="text-warning fs-3">
                Giriş
              </th>
              <th scope="col" className="text-warning fs-3">
                Çıkış
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">İşrak</th>
              <td>{data.israkGiris}</td>
              <td>{data.israkCikis}</td>
            </tr>
            <tr>
              <th scope="row">Duha</th>
              <td>{data.duhaGiris}</td>
              <td>{data.duhaCikis}</td>
            </tr>
            <tr>
              <th scope="row">Evvabin</th>
              <td>{data.evvabinGiris}</td>
              <td>{data.evvabinCikis}</td>
            </tr>
            <tr>
              <th scope="row">Teheccüd</th>
              <td>{data.teheccudGiris}</td>
              <td>{data.teheccudCikis}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
