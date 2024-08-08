import { Button, Icon, IconButton, Tooltip } from "@mui/material";
import "./App.css";
import logo from "./images/logoNew.png";
import StartIcon from "@mui/icons-material/Start";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useState } from "react";
function App() {
  const [expand, setExpand] = useState(true);
  const [sidebarItems, setsidebarItems] = useState([
    {
      logo: <CottageRoundedIcon />,
      text: "Home",
      selected: false,
    },
    {
      logo: <BlurCircularIcon />,
      text: "Discovery",
      selected: false,
    },
    {
      logo: <LocalLibraryRoundedIcon />,
      text: "Library",
      selected: false,
    },
    {
      logo: <LogoutRoundedIcon />,
      text: "Sign out",
      selected: false,
    },
    {
      logo: "",
      text: "",
      selected: false,
    },
  ]);

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "stretch",
        backgroundColor: "lightgray",
      }}
    >
      <div
        style={{
          width: expand ? "50px" : "300px",
          height: "94vh",
          // border: "2px solid red",
          backgroundColor: "lightgray",
          margin: "5px",
          padding: "15px",
          transition: "width 0.5s",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            {!expand && (
              <svg
                width="158"
                height="40"
                style={{}}
                viewBox="0 0 1588 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M101.008 42L190.99 124.905V124.886V42.1913H208.506V125.276L298.891 42V136.524H336V272.866H299.005V357.035L208.506 277.525V357.948H190.99V278.836L101.11 358V272.866H64V136.524H101.008V42ZM177.785 153.826H81.5159V255.564H101.088V223.472L177.785 153.826ZM118.625 231.149V319.392L190.99 255.655V165.421L118.625 231.149ZM209.01 254.812V165.336L281.396 231.068V272.866H281.489V318.491L209.01 254.812ZM299.005 255.564H318.484V153.826H222.932L299.005 222.751V255.564ZM281.375 136.524V81.7983L221.977 136.524H281.375ZM177.921 136.524H118.524V81.7983L177.921 136.524Z"
                  fill="black"
                />
                <path
                  d="M768.761 134.448H779.882V157.366H765.486C754.204 157.366 745.79 160.08 740.213 165.524C734.669 170.951 731.881 179.877 731.881 192.284V267.432H709.153V134.971H731.881V156.108C731.881 157.301 732.481 157.89 733.648 157.89C734.313 157.89 734.815 157.726 735.172 157.383C735.528 157.039 735.836 156.369 736.193 155.339C740.57 141.428 751.448 134.464 768.777 134.464H768.761V134.448ZM919.945 162.843C925.911 173.452 928.91 186.236 928.91 201.177C928.91 216.118 925.927 228.902 919.945 239.511C913.963 250.121 906.214 258.065 896.698 263.329C887.183 268.593 876.953 271.225 866.011 271.225C844.45 271.225 829.293 262.561 820.539 245.233C819.874 243.876 819.015 243.189 818.01 243.189C817.005 243.189 816.486 243.696 816.486 244.726V315.804H793.758V134.954H816.486V157.628C816.486 158.641 816.989 159.165 818.01 159.165C819.031 159.165 819.858 158.494 820.539 157.121C829.293 139.793 844.45 131.129 866.011 131.129C876.953 131.129 887.183 133.761 896.698 139.025C906.214 144.289 913.947 152.233 919.945 162.843ZM906.198 201.177C906.198 185.549 902.032 173.37 893.699 164.625C885.367 155.879 874.392 151.514 860.726 151.514C847.06 151.514 836.085 155.895 827.753 164.625C819.404 173.37 816.357 185.565 816.357 201.177C816.357 216.789 819.42 228.984 827.753 237.729C836.085 246.492 847.076 250.84 860.726 250.84C874.376 250.84 885.367 246.459 893.699 237.729C902.032 229 906.198 216.789 906.198 201.177ZM537.17 163.039C543.136 173.648 546.135 186.432 546.135 201.373C546.135 216.315 543.152 229.098 537.17 239.707C531.188 250.317 523.44 258.262 513.924 263.525C504.408 268.789 494.179 271.421 483.236 271.421C461.676 271.421 446.518 262.757 437.764 245.429C437.1 244.072 436.241 243.386 435.235 243.386C434.23 243.386 433.712 243.892 433.712 244.922V316H411V135.151H433.728V157.824C433.728 158.838 434.23 159.361 435.252 159.361C436.273 159.361 437.1 158.691 437.781 157.317C446.535 139.989 461.692 131.325 483.253 131.325C494.195 131.325 504.424 133.957 513.94 139.221C523.456 144.485 531.189 152.43 537.187 163.039H537.17ZM523.407 201.373C523.407 185.745 519.241 173.567 510.909 164.821C502.576 156.091 491.585 151.71 477.935 151.71C464.286 151.71 453.295 156.091 444.962 164.821C436.63 173.583 433.566 185.762 433.566 201.373C433.566 216.985 436.63 229.18 444.962 237.926C453.295 246.688 464.269 251.036 477.935 251.036C491.601 251.036 502.576 246.655 510.909 237.926C519.241 229.196 523.407 216.985 523.407 201.373ZM668.982 225.355H692.975C689.781 237.762 683.248 248.502 673.408 257.575C663.551 266.664 649.448 271.192 631.081 271.192C617.269 271.192 605.111 268.348 594.59 262.659C584.069 256.97 575.947 248.878 570.208 238.334C564.47 227.807 561.617 215.415 561.617 201.144C561.617 186.873 564.405 174.482 569.949 163.954C575.493 153.427 583.291 145.318 593.309 139.63C603.328 133.941 615.064 131.096 628.536 131.096C642.007 131.096 653.176 133.908 662.514 139.499C671.868 145.106 678.838 152.544 683.475 161.78C688.111 171.049 690.413 181.184 690.413 192.219V207.503H585.593C586.419 220.745 590.861 231.289 598.853 239.086C606.845 246.9 617.593 250.807 631.065 250.807C642.007 250.807 650.404 248.568 656.208 244.056C662.011 239.544 666.259 233.316 668.966 225.322L668.982 225.355ZM585.123 188.426H664.443C664.443 176.885 661.493 167.829 655.592 161.29C649.691 154.767 640.435 151.481 627.806 151.481C616.021 151.481 606.375 154.669 598.886 161.045C591.396 167.404 586.809 176.542 585.123 188.426ZM947.244 267.4H969.988V84H947.244V267.416V267.4ZM1266.89 120.487H1293.45V91.814H1266.89V120.487ZM1364.95 247.669C1360.82 248.094 1358.32 248.306 1357.5 248.306C1356.33 248.306 1355.37 247.963 1354.71 247.276C1354.04 246.606 1353.69 245.674 1353.69 244.464C1353.69 243.631 1353.91 241.113 1354.34 236.945C1354.74 232.793 1354.97 226.368 1354.97 217.72V154.342H1387.39L1381 134.938H1354.98V99.2683H1332.26V134.922H1307.53V154.326H1332.26V224.063C1332.26 238.678 1335.81 249.548 1342.87 256.676C1349.94 263.803 1360.72 267.383 1375.22 267.383H1392.9V247.015H1384.05C1375.46 247.015 1369.1 247.227 1364.97 247.652L1364.95 247.669ZM1502.34 134.938L1464.7 246.083C1464.2 247.456 1463.4 249.238 1460.83 249.238C1458.25 249.238 1457.44 247.456 1456.93 246.083L1419.29 134.938H1396.11L1439.7 267.4H1455.12C1456.12 267.4 1456.89 267.498 1457.41 267.661C1457.91 267.825 1458.33 268.25 1458.67 268.936C1459.33 269.95 1459.25 271.486 1458.41 273.514L1451.34 292.869C1450.32 295.419 1448.39 296.694 1445.54 296.694C1444.52 296.694 1442.17 296.481 1438.47 296.056C1434.76 295.631 1429.98 295.419 1424.08 295.419H1405.63V315.787H1429.88C1444.03 315.787 1452.54 313.368 1459.87 308.529C1467.2 303.691 1472.87 295.157 1476.92 282.93L1524 140.022V134.938H1502.37H1502.34ZM1189.96 184.356L1154.34 134.938H1129.33V140.022L1172.01 197.335L1119.97 262.299V267.383H1145.49L1186.92 214.14L1225.57 267.383H1250.08V262.299L1204.85 201.161L1253.88 140.284V134.938H1228.36L1189.97 184.356H1189.96ZM1269.31 267.4H1292.05V134.954H1269.31V267.416V267.4ZM1119.66 225.355C1116.45 237.762 1109.94 248.502 1100.1 257.575C1090.24 266.664 1076.14 271.192 1057.77 271.192C1043.96 271.192 1031.8 268.348 1021.28 262.659C1010.74 256.97 1002.64 248.878 996.899 238.334C991.176 227.807 988.323 215.415 988.323 201.144C988.323 186.873 991.111 174.482 996.656 163.954C1002.22 153.427 1010 145.318 1020.02 139.63C1030.03 133.941 1041.77 131.096 1055.26 131.096C1068.75 131.096 1079.9 133.908 1089.25 139.499C1098.59 145.106 1105.58 152.544 1110.21 161.78C1114.85 171.049 1117.15 181.184 1117.15 192.219V207.503H1012.32C1013.16 220.745 1017.58 231.289 1025.58 239.086C1033.57 246.9 1044.32 250.807 1057.79 250.807C1068.73 250.807 1077.13 248.568 1082.93 244.056C1088.73 239.544 1092.98 233.316 1095.67 225.322H1119.68L1119.66 225.355ZM1012.38 188.426H1091.7C1091.7 176.885 1088.75 167.829 1082.87 161.29C1076.96 154.767 1067.71 151.481 1055.08 151.481C1043.29 151.481 1033.65 154.669 1026.16 161.045C1018.67 167.404 1014.07 176.542 1012.4 188.426H1012.38Z"
                  fill="black"
                />
              </svg>
            )}
            {expand && (
              <img
                style={{
                  width: 50,
                  height: 50,
                  display: "flex",
                  justifyContent: "end",
                }}
                src={logo}
                alt="logo"
              />
            )}
          </div>
          <div>
            {!expand && (
              <IconButton
                className="collapseArrow"
                onClick={() => setExpand(true)}
              >
                <KeyboardTabIcon color="primary" />
              </IconButton>
            )}
          </div>
        </div>

        <hr />
        {!expand && (
          <div>
            <div className="test2">
              <IconButton size="small" sx={{ my: 2, py: 0 }}>
                <AddRoundedIcon />
                &nbsp; {!expand && <span> New Tread </span>}
              </IconButton>
            </div>
            {sidebarItems.map((item, ind) => (
              <div className="test" style={{}}>
                <IconButton size="small" sx={{ my: 1 }}>
                  {item.logo}&nbsp; {!expand && <span> {item.text} </span>}
                </IconButton>
              </div>
            ))}
          </div>
        )}
        {expand && (
          <div>
            <div className="test2">
              <Tooltip title="New Tread" placement="right">
                <IconButton size="small" sx={{ my: 2, py: 0 }}>
                  <AddRoundedIcon />
                  &nbsp; {!expand && <span> New Tread </span>}
                </IconButton>
              </Tooltip>
            </div>
            {sidebarItems.map((item, ind) => (
              <div className="test" style={{}}>
                <Tooltip title={item.text} placement="right">
                  <IconButton size="small" sx={{ my: 1 }}>
                    {item.logo}&nbsp; {!expand && <span> {item.text} </span>}
                  </IconButton>
                </Tooltip>
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "20px",
          }}
        >
          {expand && (
            <IconButton onClick={() => setExpand(false)}>
              <StartIcon color="primary" />
            </IconButton>
          )}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "98vh",
          // border: "2px solid blue",
          borderRadius: "5px",
          backgroundColor: "white",
          margin: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Dashboard</div>
      </div>
    </div>
  );
}

export default App;
