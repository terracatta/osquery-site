import React, { Component } from 'react'

class OsqueryDocs extends Component {
  static defaultProps = {
    height: 155,
    width: 124,
  }

  render() {
    const { className, height, width } = this.props

    return (
      <svg
        className={className}
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 ${width} ${height}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>osquery-docs-svg</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="osquery-io-again-again" transform="translate(-738.000000, -3713.000000)">
            <g id="additional-resources" transform="translate(305.000000, 3492.000000)">
              <g id="read-the-osquery-docs" transform="translate(345.000000, 149.000000)">
                <g id="osquery-docs-svg" transform="translate(88.000000, 72.000000)">
                  <g id="Page-1">
                    <path
                      d="M113.371429,3.56321839 C113.371429,1.59632184 111.784229,0 109.828571,0 C104.014743,0 95.6571429,10.6896552 62,10.6896552 L19.4857143,10.6896552 L12.4,10.6896552 C5.55165714,10.6896552 0,16.2732184 0,23.1609195 L0,136.346552 L0,140.747126 C0,142.30069 0.995542857,143.608391 2.37548571,144.096552 C2.48708571,144.137529 2.60045714,144.176724 2.72091429,144.203448 C2.98662857,144.269368 3.25765714,144.310345 3.54285714,144.310345 C4.31697143,144.310345 5.02554286,144.053793 5.60834286,143.631552 C8.27788571,142.197356 12.2033714,138.965517 21.2571429,138.965517 L63.9538857,138.965517 C74.5824571,138.965517 113.371429,135.199195 113.371429,125.621264 L113.371429,8.90804598 L113.371429,3.56321839 Z"
                      id="Fill-1"
                      fill="#A596FF"
                    />
                    <path
                      d="M0,21.7456092 C0,20.3452644 0.403885714,18.9769885 1.16028571,17.8153793 C1.16028571,17.8153793 3.44542857,21.3785977 10.3327429,21.3785977 L120.556343,21.3785977 C122.458857,21.3785977 124,22.9749195 124,24.9418161 L124,151.436069 C124,153.404747 122.458857,154.999287 120.556343,154.999287 L8.60737143,154.999287 C3.85285714,154.999287 0,151.013828 0,146.094805 L0,21.7456092 Z"
                      id="Fill-3"
                      fill="#FFFFFF"
                    />
                    <g id="4-osquery-icon" transform="translate(35.603960, 42.720000)">
                      <polygon
                        id="Fill-1"
                        fill="#A596FF"
                        points="0 -6.80002091e-05 13.7096349 13.5319736 27.4192697 13.5319736 13.7096349 -6.80002091e-05"
                      />
                      <polygon
                        id="Fill-2"
                        fill="#00125F"
                        points="13.7094978 13.5319056 -0.000137096347 27.1319474 13.7094978 27.1319474 27.4191326 13.5319056"
                      />
                      <polygon
                        id="Fill-3"
                        fill="#A596FF"
                        points="54.838608 -6.80002091e-05 41.1289731 13.5319736 41.1289731 27.1320154 54.838608 13.5319736"
                      />
                      <polygon
                        id="Fill-4"
                        fill="#00125F"
                        points="27.4189955 -6.80002091e-05 27.4189955 13.5319736 41.1293159 27.1320154 41.1293159 13.5319736"
                      />
                      <polygon
                        id="Fill-5"
                        fill="#A596FF"
                        points="0 40.8681937 0 54.4002353 13.7096349 40.8681937 13.7096349 27.2681518"
                      />
                      <polygon
                        id="Fill-6"
                        fill="#00125F"
                        points="13.7094978 40.8681937 27.4191326 54.4002353 27.4191326 40.8681937 13.7094978 27.2681518"
                      />
                      <polygon
                        id="Fill-7"
                        fill="#A596FF"
                        points="27.4189955 40.663785 41.1293159 54.2645068 54.8389507 54.2645068 41.1293159 40.663785"
                      />
                      <polygon
                        id="Fill-8"
                        fill="#00125F"
                        points="41.1291102 27.1318114 27.4187899 40.663853 41.1291102 40.663853 54.8387451 27.1318114"
                      />
                    </g>
                  </g>
                  <rect
                    id="Rectangle-3"
                    fill="#A596FF"
                    x="27"
                    y="109"
                    width="71"
                    height="9"
                    rx="2"
                  />
                  <rect
                    id="Rectangle-3"
                    fill="#A596FF"
                    x="27"
                    y="129"
                    width="53"
                    height="9"
                    rx="2"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default OsqueryDocs
