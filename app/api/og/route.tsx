import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const font = fetch(new URL('../../../assets/fonts/CalSans-SemiBold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export async function GET(req: NextRequest) {
  try {
    const fontData = await font;
    const { searchParams } = new URL(req.url);
    // console.log(import.meta.url);

    // const logoData = await fetch(
    //   new URL('../../images/logo.png', import.meta.url),
    // )
    //   .then((res) => res.arrayBuffer())
    //   .then(
    //     (buf) =>
    //       `data:image/jpeg;base64,${Buffer.from(buf).toString('base64')}`,
    //   );

    const imageData = await fetch(
      new URL('../../../assets/images/og-background.jpeg', import.meta.url),
    )
      .then((res) => res.arrayBuffer())
      .then((buf) => `data:image/jpeg;base64,${Buffer.from(buf).toString('base64')}`);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My default title';

    return new ImageResponse(
      (
        <div
          tw="h-full w-full flex items-center justify-center bg-gray-100"
          style={{ backgroundImage: `url(${imageData})` }}>
          <div tw="flex items-center justify-center h-full">
            <div tw="flex flex-col gap-16 justify-center items-center w-full h-full p-20">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 400"
                width="110"
                height="110">
                <path
                  fill="#7c3aed"
                  opacity="1.000000"
                  stroke="none"
                  d="
M196.944168,381.833252
	C171.285690,381.888184 145.616058,382.351501 119.978188,381.651489
	C114.886963,381.512482 109.778656,377.152924 104.917091,374.328491
	C88.339027,364.697083 71.898811,354.828644 55.341820,345.160553
	C47.588932,340.633423 39.604843,336.496948 31.929918,331.846161
	C30.463495,330.957550 29.126245,328.492035 29.122255,326.750885
	C28.979092,264.262299 28.507647,201.766953 29.309937,139.288345
	C29.542822,121.152458 35.339092,103.689247 44.021317,87.346603
	C55.797482,65.180199 73.655525,49.109398 94.618561,36.393528
	C103.465256,31.027254 113.290558,27.235216 123.658653,24.765331
	C135.690842,21.899025 147.693451,19.410881 160.029602,20.101870
	C174.208298,20.896063 188.089218,23.517490 201.632645,28.135208
	C215.370316,32.819164 226.979538,41.311058 239.451660,48.235115
	C257.113312,58.040184 274.660645,68.079338 291.916077,78.578430
	C304.206421,86.056480 316.761841,93.475487 327.707703,102.691925
	C341.586456,114.377823 352.928925,128.546051 360.834137,145.290970
	C368.284302,161.071915 371.536133,177.521011 372.121124,194.868591
	C372.831543,215.935745 368.642609,235.870483 359.880493,254.834808
	C354.223053,267.079468 345.782410,277.358398 336.351501,287.096161
	C324.052063,299.795807 309.821716,309.524261 293.815460,316.306458
	C284.686737,320.174469 274.556183,321.843292 264.747864,323.882568
	C258.521484,325.177094 252.052933,325.937347 245.702438,325.880524
	C229.623047,325.736694 213.904404,323.143127 198.276276,317.353607
	C197.430405,319.804535 197.031586,321.927643 197.024338,324.052063
	C196.958694,343.312317 196.961441,362.572815 196.944168,381.833252
M91.253181,254.721008
	C86.319420,247.055984 80.823761,239.651077 78.929459,229.511093
	C81.913429,231.610809 84.067894,232.933487 86.005623,234.520752
	C102.316841,247.881668 121.268013,255.887817 141.810013,258.672211
	C158.958740,260.996643 176.273346,258.533325 192.727234,252.597519
	C210.997742,246.006363 226.578339,235.221039 239.632904,220.845352
	C248.115860,211.503952 254.806168,200.864624 259.150604,189.128510
	C262.385406,180.390045 264.283600,171.071960 265.966248,161.863831
	C268.451996,148.260498 267.762390,134.478485 264.435516,121.165474
	C259.545532,101.597740 250.321579,84.120354 235.914383,69.688553
	C222.308182,56.059135 206.500839,45.963711 187.781235,41.042313
	C180.114258,39.026661 172.190720,37.144691 164.332031,36.905552
	C153.589905,36.578667 142.568069,36.726109 132.096085,38.820248
	C122.629486,40.713337 113.656303,45.292252 104.617371,49.051811
	C92.529816,54.079372 82.667473,62.600658 73.982002,71.919395
	C63.695137,82.956284 55.908783,95.899025 51.050381,110.494316
	C47.162727,122.173317 44.265461,134.137817 44.175564,146.284698
	C43.772301,200.771500 43.999962,255.262970 43.999966,309.752747
	C43.999966,311.366211 43.999962,312.979645 43.999962,314.960327
	C60.303802,314.960327 76.094246,314.960327 92.351868,314.281189
	C92.561043,313.322052 92.950401,312.363312 92.952667,311.403687
	C92.993813,294.018555 93.014297,276.633240 92.944000,259.248291
	C92.938309,257.841888 92.241867,256.438293 91.253181,254.721008
z"
                />

                <path
                  fill="#f1ebfd"
                  opacity="1.000000"
                  stroke="none"
                  d="
M91.884682,314.960327
	C76.094246,314.960327 60.303802,314.960327 43.999962,314.960327
	C43.999962,312.979645 43.999966,311.366211 43.999966,309.752747
	C43.999962,255.262970 43.772301,200.771500 44.175564,146.284698
	C44.265461,134.137817 47.162727,122.173317 51.050381,110.494316
	C55.908783,95.899025 63.695137,82.956284 73.982002,71.919395
	C82.667473,62.600658 92.529816,54.079372 104.617371,49.051811
	C113.656303,45.292252 122.629486,40.713337 132.096085,38.820248
	C142.568069,36.726109 153.589905,36.578667 164.332031,36.905552
	C172.190720,37.144691 180.114258,39.026661 187.781235,41.042313
	C206.500839,45.963711 222.308182,56.059135 235.914383,69.688553
	C250.321579,84.120354 259.545532,101.597740 264.435516,121.165474
	C267.762390,134.478485 268.451996,148.260498 265.966248,161.863831
	C264.283600,171.071960 262.385406,180.390045 259.150604,189.128510
	C254.806168,200.864624 248.115860,211.503952 239.632904,220.845352
	C226.578339,235.221039 210.997742,246.006363 192.727234,252.597519
	C176.273346,258.533325 158.958740,260.996643 141.810013,258.672211
	C121.268013,255.887817 102.316841,247.881668 86.005623,234.520752
	C84.067894,232.933487 81.913429,231.610809 78.929459,229.511093
	C80.823761,239.651077 86.319420,247.055984 91.617264,255.340912
	C91.949120,275.627319 91.916901,295.293823 91.884682,314.960327
M99.038910,174.276108
	C103.992188,181.635895 108.342239,189.218750 115.358963,195.259705
	C124.789696,203.378983 135.409332,208.440994 147.335938,209.801117
	C164.873840,211.801132 181.341217,208.509644 195.810532,197.141296
	C210.424576,185.659241 218.586807,170.916962 219.897644,152.605316
	C220.764648,140.493835 218.968094,128.738586 213.118271,117.666977
	C205.859985,103.929588 195.019989,93.861343 180.992462,88.300247
	C167.160568,82.816719 152.578659,82.167397 137.813950,86.810173
	C122.474510,91.633675 110.488220,100.614601 102.564720,114.177231
	C91.516785,133.087936 90.699486,153.146561 99.038910,174.276108
z"
                />

                <path
                  fill="#7c3aed"
                  opacity="1.000000"
                  stroke="none"
                  d="
M99.012161,173.883850
	C90.699486,153.146561 91.516785,133.087936 102.564720,114.177231
	C110.488220,100.614601 122.474510,91.633675 137.813950,86.810173
	C152.578659,82.167397 167.160568,82.816719 180.992462,88.300247
	C195.019989,93.861343 205.859985,103.929588 213.118271,117.666977
	C218.968094,128.738586 220.764648,140.493835 219.897644,152.605316
	C218.586807,170.916962 210.424576,185.659241 195.810532,197.141296
	C181.341217,208.509644 164.873840,211.801132 147.335938,209.801117
	C135.409332,208.440994 124.789696,203.378983 115.358963,195.259705
	C108.342239,189.218750 103.992188,181.635895 99.012161,173.883850
M149.803802,125.057945
	C136.557510,130.395248 129.115051,142.729034 133.197876,154.066849
	C139.567596,171.755280 158.515366,176.882126 172.322067,164.843826
	C180.440796,157.764969 183.042313,145.683044 176.502533,135.272552
	C171.519623,127.340363 161.456619,121.426811 149.803802,125.057945
M180.004379,118.997459
	C182.273468,124.345123 185.295654,126.084869 190.514420,123.815582
	C193.553268,122.494186 196.004471,119.415039 194.878601,115.610764
	C193.979492,112.572701 193.224777,108.964409 188.597824,108.967079
	C181.772964,108.971024 180.004593,110.721718 180.004379,118.997459
z"
                />
                <path
                  fill="#f1ebfd"
                  opacity="1.000000"
                  stroke="none"
                  d="
M150.217712,124.955688
	C161.456619,121.426811 171.519623,127.340363 176.502533,135.272552
	C183.042313,145.683044 180.440796,157.764969 172.322067,164.843826
	C158.515366,176.882126 139.567596,171.755280 133.197876,154.066849
	C129.115051,142.729034 136.557510,130.395248 150.217712,124.955688
z"
                />
                <path
                  fill="#f1ebfd"
                  opacity="1.000000"
                  stroke="none"
                  d="
M180.002518,118.576538
	C180.004593,110.721718 181.772964,108.971024 188.597824,108.967079
	C193.224777,108.964409 193.979492,112.572701 194.878601,115.610764
	C196.004471,119.415039 193.553268,122.494186 190.514420,123.815582
	C185.295654,126.084869 182.273468,124.345123 180.002518,118.576538
z"
                />
              </svg>

              <div tw="flex flex-col items-center">
                <h1 tw="text-7xl text-gray-900 font-bold text-center mb-0 leading-tight capitalize">
                  {title}
                </h1>
                <p tw="text-violet-700 font-semibold capitalize mt-4 text-2xl text-center">
                  pfpresizer.com
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Cal Sans',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}