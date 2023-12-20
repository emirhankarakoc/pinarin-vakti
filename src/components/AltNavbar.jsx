import { Container } from "semantic-ui-react";

export const AltNavbar = ({ data }) => {
  const takvim = data;

  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" className="text-primary fs-3">
                İmsak
              </th>
              <th scope="col" className="text-primary fs-3">
                Güneş
              </th>
              <th scope="col" className="text-primary fs-3">
                Öğle
              </th>
              <th scope="col" className="text-primary fs-3">
                İkindi
              </th>
              <th scope="col" className="text-primary fs-3">
                Akşam
              </th>
              <th scope="col" className="text-primary fs-3">
                Yatsı
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{data.imsak}</th>
              <th scope="row">{data.gunes}</th>
              <th scope="row">{data.ogle}</th>
              <th scope="row">{data.ikindi || data.ikinci}</th>
              <th scope="row">{data.aksam}</th>
              <th scope="row">{data.yatsi}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
