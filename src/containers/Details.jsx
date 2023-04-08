import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalStatesContext } from "../context/DataContext";

const Detail = () => {
  const { odontologos, theme } = useGlobalStatesContext();
  const { id } = useParams();

  const [odontologo, setOdontologo] = useState(undefined);

  useEffect(() => {
    const o = odontologos.find((odontologo) => {
      return odontologo.id == id;
    });
    setOdontologo(o);
  }, [odontologos]);

  return (
    <div className={`${theme.color} detail-container`}>
      <h1 className="detail-title">Detail of Dentist</h1>
      {odontologo && (
        <table className="detail-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{odontologo.name}</td>
              <td>{odontologo.email}</td>
              <td>{odontologo.phone}</td>
              <td>{odontologo.website}</td>
            </tr>
          </tbody>
        </table>
      )}
      {!odontologo && <h1>Dentist Not Found</h1>}
    </div>
  );
};

export default Detail;
