import "../App.css";
import { BackToTabular } from "../components/backToTabular";
import { DataProvider2020, useData2020 } from "../context/context2020";
import { DataProvider2021, useData2021 } from "../context/context2021";
import { DataProvider2022, useData2022 } from "../context/context2022";

export const Table2020 = () => {
  return (
    <DataProvider2020>
      <Table year="2020-21" Context={useData2020} />
    </DataProvider2020>
  );
};

export const Table2020Ppo = () => {
  return (
    <DataProvider2020>
      <TablePpo year="2021-22 PPO" Context={useData2020} />
    </DataProvider2020>
  );
};

export const Table2021 = () => {
  return (
    <DataProvider2021>
      <Table year="2021-22" Context={useData2021} />
    </DataProvider2021>
  );
};

export const Table2021Ppo = () => {
  return (
    <DataProvider2021>
      <TablePpo year="2021-22 PPO" Context={useData2021} />
    </DataProvider2021>
  );
};

export const Table2022 = () => {
  return (
    <DataProvider2022>
      <Table year="2022-23" Context={useData2022} />
    </DataProvider2022>
  );
};

export const Table2022Ppo = () => {
  return (
    <DataProvider2022>
      <TablePpo year="2022-23 PPO" Context={useData2022} />
    </DataProvider2022>
  );
};

export const Table = (props) => {
  const { data, error, loading } = props.Context();

  if (loading) {
    return (
      <>
        <div className="loader-container">
          <div className="loader"></div>
          <h2>It will take 30 sec to load data...</h2>
          <h2>As it is hosted for free!!</h2>
        </div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <center>
      <h1 style={{ margin: "1vh" }}>
        {props.year}
        <BackToTabular />
      </h1>
      <div id="table-wrapper">
        <div id="table-scroll">
          <table className="table table-bordered table-striped table-sm table-hover">
            <thead>
              <tr>
                <th className="sticky-header">
                  <center>Company</center>
                </th>
                <th className="sticky-header">
                  <center>Pointer</center>
                </th>
                <th className="sticky-header">
                  <center>Branch</center>
                </th>
                <th className="sticky-header">
                  <center>Total</center>
                </th>
                <th className="sticky-header">
                  <center>Salary</center>
                </th>
                <th className="sticky-header">
                  <center>Date</center>
                </th>
                <th className="sticky-header">
                  <center>Investment</center>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((info) => {
                const dateString = info.date;
                const dateObject = new Date(dateString);
                const year = dateObject.getFullYear();
                const month = dateObject.getMonth() + 1;
                const day = dateObject.getDate();

                const formattedDate = `${day < 10 ? "0" : ""}${day}-${
                  month < 10 ? "0" : ""
                }${month}-${year}`;
                return (
                  <tr key={info._id}>
                    <td>{info.company}</td>
                    <td>{info.pointer}</td>
                    <td>{info.branch}</td>
                    <td>{info.total}</td>
                    <td>{info.salary}</td>
                    <td>{formattedDate}</td>
                    <td>{info.investment}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </center>
  );
};

export const TablePpo = (props) => {
  const { dataPpo, loadingPpo, errorPpo } = props.Context();

  if (loadingPpo) {
    return (
      <>
        <div className="loader-container">
          <div className="loader"></div>
          <h2>It will take 30 sec to load data...</h2>
          <h2>As it is hosted for free!!</h2>
        </div>
      </>
    );
  }

  if (errorPpo) {
    return <div>Error: {errorPpo}</div>;
  }

  return (
    <center>
      <h1 style={{ margin: "1vh" }}>
        {props.year}
        <BackToTabular />
      </h1>
      <div id="table-wrapper">
        <div id="table-scroll">
          <table className="table table-bordered table-striped table-sm table-hover">
            <thead>
              <tr>
                <th className="sticky-header">
                  <center>Company</center>
                </th>
                <th className="sticky-header">
                  <center>Branch</center>
                </th>
                <th className="sticky-header">
                  <center>Total</center>
                </th>
                <th className="sticky-header">
                  <center>Salary</center>
                </th>
                <th className="sticky-header">
                  <center>Investment</center>
                </th>
              </tr>
            </thead>

            <tbody>
              {dataPpo.map((info) => {
                return (
                  <tr key={info._id}>
                    <td>{info.company}</td>
                    <td>{info.branch}</td>
                    <td>{info.total}</td>
                    <td>{info.salary}</td>
                    <td>{info.investment}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </center>
  );
};
