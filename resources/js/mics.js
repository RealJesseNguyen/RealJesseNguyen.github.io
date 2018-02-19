function mic(args) {
    this.name = args.name ? args.name : 'N/A';
    this.img = args.img ? args.img : 'N/A';
    this.type = args.type ? args.type : 'N/A';
    this.pattern = args.pattern ? args.pattern : 'N/A';
    this.response = args.response ? args.response : 'N/A';
    this.SPL = args.SPL ? args.SPL : 'N/A';
    this.impedance = args.impedance ? args.impedance : 'N/A';
    this.SNR = args.SNR ? args.SNR : 'N/A';
    this.noise = args.noise ? args.noise : 'N/A';
    this.description = args.description ? args.description : 'N/A';
}

var mics = [
    new mic({
        name: 'Royer R-122 MKII',
        img: 'resources/img/royerr122.jpg',
        type: 'Ribbon',
        pattern: 'Figure-8',
        response: '30 Hz - 15 kHz',
        SPL: '135 dB',
        impedance: '200 ohms',
        noise: '<18 dB',
        description: 'Active ribbon (high output and impedance matching)</li>\
                    <li>-15 dB pad and bass rolloff</li>\
                    <li>High SPL capabilities</li>\
                    <li>Phantom powered</li>'
    }),
    new mic({
        name: 'Shure SM57',
        img: 'resources/img/shuresm57.jpg',
        type: 'Dynamic',
        pattern: 'Cardioid',
        response: '40 Hz - 15 kHz',
        impedance: '150 ohms',
        description: '<li>Cardioid dynamic</li>\
                    <li>Most popular dynamic mic on the planet</li>\
                    <li>Good for live use or in studio</li>\
                    <li>Good for instruments and voice (with pop filter)</li>\
                    <li>Extremely durable (handles extreme SPL)</li>'
    }),
    new mic({
        name: 'Shure SM58',
        img: 'resources/img/shuresm58.jpg',
        type: 'Dynamic',
        pattern: 'Cardioid',
        response: '50 Hz - 15 kHz',
        impedance: '150 ohms'
    }),
    new mic({
        name: 'Neumann TLM 103',
        img: 'resources/img/neumanntlm103.jpg',
        type: 'Condenser',
        pattern: 'Cardioid',
        response: '20 Hz - 20 kHz',
        SPL: '138 dB',
        impedance: '50 ohms',
        SNR: '87 dB (A weighted)',
        noise: '7dB (A weighted)',
        description: '<li>Cardioid condenser</li>\
                    <li>Very high sensitivity and very low self noise</li>\
                    <li>Good for vocals and acoustic instruments</li>\
                    <li>Based on U87</li>\
                    <li>Phantom powered</li>'
    }),
    new mic({
        name: 'Shure SM7B',
        img: 'resources/img/shuresm7b.jpg',
        type: 'Dynamic',
        pattern: 'Cardioid',
        response: '50 Hz - 20 kHz',
        impedance: '150 ohms',
        description: '<li>Cardioid dynamic</li>\
                    <li>Bass rolloff and presence boost</li>\
                    <li>Rejects electromagnetic hum</li>\
                    <li>Good for voice</li>'
    }),
    new mic({
        name: 'Sennheiser MD441U',
        img: 'resources/img/sennheisermd441u.jpg',
        type: 'Dynamic',
        pattern: 'Supercardioid',
        response: '30 Hz - 20 kHz',
        impedance: '200 ohms',
        description: '<li>Supercardioid dynamic</li>\
                    <li>Five position bass contour switch</li>\
                    <li>Exquisite for vocals and instruments</li>\
                    <li>Excellent feedback rejection</li>\
                    <li>Treble boost switch</li>'
    }),
    new mic({
        name: 'RCA Type 77-DX',
        img: 'resources/img/rcatype77dx.jpg',
        type: 'Ribbon',
        pattern: 'Selectable',
        impedance: 'Selectable',
        description: '<li>Poly-directional ribbon</li>\
                    <li>One of the most iconic microphones to grace the recording and broadcasting world</li>\
                    <li>Closable shutter allows non-directional pickup (closed) and bi-directional (open)</li>'
    }),
    new mic({
        name: 'Neumann U67',
        img: 'resources/img/neumannu67.jpg',
        type: 'Condenser',
        pattern: 'Selectable',
        SPL: '114 dB (for THD 0.5%)',
        impedance: '200 ohms',
        SNR: '73/77/74 dB (A weighted)',
        noise: '21/17/20 dB (A weighted)',
        description: '<li>Multi-pattern tube condenser</li>\
                    <li>-10 dB pad and bass rolloff</li>\
                    <li>Vocal mic with unprecendented versatility</li>\
                    <li>Released in 1960</li>\
                    <li>NU 67 power supply</li>'
    }),
    new mic({
        name: 'Neumann U47',
        img: 'resources/img/neumannu47.jpg',
        type: 'Condenser',
        pattern: 'Selectable',
        impedance: '200 ohms',
        description: '<li>Multi-pattern tube condenser (first mic with switchable patterns)</li>\
                    <li>Did not maintain equal output levels across patterns</li>\
                    <li>Most revered vocal mic in history</li>\
                    <li>Released in 1947</li>\
                    <li>Tube power supply</li>'
    }),
    new mic({
        name: 'Neumann U87',
        img: 'resources/img/neumannu87.jpg',
        type: 'Condenser',
        pattern: 'Selectable',
        SPL: '117 dB (for THD 0.5%)',
        impedance: '200 ohms',
        SNR: '79/82/80 dB (A weighted)',
        noise: '15/12/14 dB (A weighted)',
        description: '<li>Multi-pattern condenser</li>\
                    <li>-10 dB pad and bass rolloff</li>\
                    <li>Extremely versatile</li>\
                    <li>Phantom powered</li>'
    }),
    new mic({
        name: 'Oktava ML-52-02',
        img: 'resources/img/oktavaml5202.jpg',
        type: 'Ribbon',
        pattern: 'Figure-8',
        SPL: '>135 dB',
        impedance: '300 ohms',
        description: '<li>Dual-ribbon (figure-8)</li>\
                    <li>Low self noise</li>\
                    <li>Suited for strings and brass</li>'
    }),
    new mic({
        name: 'Crown PZM30 D',
        img: 'resources/img/crownpzm30d.jpg',
        type: 'Boundary',
        pattern: 'Hemispherical',
        response: '20 Hz - 20 kHz',
        SPL: '150 dB',
        impedance: '240 ohms',
        SNR: '74 dB (A weighted)',
        description: '<li>Hemispherical boundary mic (constructed with small diaphragm condenser elements)</li>\
                    <li>Good for mic-ing pianos and acoustic instruments</li>\
                    <li>Also good for mic-ing drum kits</li>'
    }),
    new mic({
        name: 'Electro-Voice RE20',
        img: 'resources/img/electrovoicere20.jpg',
        type: 'Dynamic',
        pattern: 'Cardioid',
        response: '45 Hz - 18 kHz',
        impedance: '150 ohms',
        description: '<li>Cardioid dynamic</li>\
                    <li>Designed for broadcast and voiceover</li>\
                    <li>Good for loud vocals</li>\
                    <li>Free of proximity effect</li>'
    }),
    new mic({
        name: 'Rode NT2-A',
        img: 'resources/img/rodent2a.jpg',
        type: 'Condenser',
        pattern: 'Selectable',
        response: '20 Hz - 20 kHz',
        SPL: '147 dB',
        impedance: '200 ohms',
        noise: '7 dB (A weighted)',
        description: '<li>Multi-pattern condenser</li>\
                    <li>Switchable high-pass filter (3 settings)</li>\
                    <li>Switchable 0/5/10 dB pad</li>\
                    <li>Phantom powered</li>'
    }),
    new mic({
        name: 'Neumann KM 184',
        img: 'resources/img/neumannkm184.jpg',
        type: 'Condenser',
        pattern: 'Selectable',
        response: '20 Hz - 20 kHz',
        SPL: '140/138/142 dB (for THD 0.5%)',
        impedance: '50 ohms',
        SNR: '81/81/79 dB (A weighted)',
        noise: '13/13/15 dB (A weighted)',
        description: '<li>Multi-pattern condenser (switchable capsules)</li>\
                    <li>Clear sound reproduction (handles high SPL)</li>\
                    <li>Good for instrument mic-ing</li>\
                    <li>Phantom powered</li>'
    }),
    new mic({
        name: 'AKG C414 XLS',
        img: 'resources/img/akgc414xls.jpg',
        type: 'Condenser',
        pattern: 'Selectable',
        response: '20 Hz - 20 kHz',
        impedance: '200 ohms',
        SNR: '88 dB (A weighted)',
        noise: '6 dB (A weighted)',
        description: '<li>Multi-pattern condenser</li>\
                    <li>High sensitivity and low self noise</li>\
                    <li>Used for vocals and acoustic instruments</li>\
                    <li>Phantom powered</li>'
    }),
    new mic({
        name: 'Rode K2',
        img: 'resources/img/rodek2.jpg',
        type: 'Condenser',
        pattern: 'Selectable',
        response: '20 Hz - 20 kHz',
        SPL: '162 dB',
        impedance: '200 ohms',
        noise: '10 dB (A weighted)',
        description: '<li>Multi-pattern tube condenser</li>\
                    <li>Handles high SPL</li>\
                    <li>Low self noise</li>\
                    <li>Relatively durable</li>'
    }),
    new mic({
        name: 'Neumann TLM 102',
        img: 'resources/img/neumanntlm102.jpg',
        type: 'Condenser',
        pattern: 'Cardioid',
        response: '20 Hz - 20 kHz',
        SPL: '144 dB (for THD 0.5%)',
        impedance: '50 ohms',
        SNR: '82 dB (A weighted)',
        noise: '12 dB (A weighted)',
        description: '<li>Cardioid condenser</li>\
                    <li>High sensitivity and low self noise</li>\
                    <li>Good for vocals and room mic-ing</li>\
                    <li>Phantom powered</li>'
    }),
    new mic({
        name: 'MXL 990',
        img: 'resources/img/mxl990.jpg',
        type: 'Condenser',
        pattern: 'Cardioid',
        response: '30 Hz - 20 kHz',
        SPL: '130 dB (for THD 0.5%)',
        impedance: '200 ohms',
        SNR: '80 dB (A weighted)',
        noise: '20 dB (A weighted)',
        description: '<li>Cardioid condenser</li>\
                    <li>Silky highs and tight, solid lows</li>\
                    <li>Good for vocals and acoustic instruments</li>\
                    <li>Phantom powered</li>'
    }),
    new mic({
        name: 'AKG D112 MKII',
        img: 'resources/img/akgd112mkii.jpg',
        type: 'Dynamic',
        pattern: 'Cardioid',
        response: '20 Hz - 17 kHz',
        impedance: '210 ohms',
        description: '<li>Dynamic cardioid</li>\
                    <li>Bass drum specific</li>\
                    <li>Good for stage use as well as studio use</li>\
                    <li>Hum compensation coil</li>'
    }),
    new mic({
        name: 'Sennheiser MD 421-II',
        img: 'resources/img/sennheisermd421ii.jpg',
        type: 'Dynamic',
        pattern: 'Cardioid',
        response: '30 Hz - 17 kHz',
        impedance: '200 ohms',
        description: '<li>Cardioid dynamic</li>\
                    <li>Five-position bass rolloff switch</li>\
                    <li>Effective feedback rejected</li>\
                    <li>Can handle decently high SPL</li>'
    }),
    new mic({
        name: 'Avantone CK-1',
        img: 'resources/img/avantoneck1.jpg',
        type: 'Condenser',
        pattern: 'Selectable',
        response: '25 Hz - 20 kHz',
        SPL: '138 dB (for THD 0.5%)',
        impedance: '200 ohms',
        SNR: '78 dB',
        noise: '<17 dB',
        description: '<li>Multi-pattern condenser</li>\
                    <li>-10 dB pad and bass rolloff</li>\
                    <li>Changeable pattern heads (cardioid/hypercardioid/omni)</li>\
                    <li>Good for mic-ing acoustic instruments</li>\
                    <li>Phantom powered</li>'
    }),
    new mic({
        name: 'Royer R-121',
        img: 'resources/img/royerr121.jpg',
        type: 'Ribbon',
        pattern: 'Figure-8',
        response: '30 Hz - 15 kHz',
        SPL: '>135 dB',
        impedance: '300 ohms',
        description: '<li>Dynamic ribbon</li>\
                    <li>High SPL capabilities (versatile)</li>\
                    <li>Low self noise and consistent frequency response</li>\
                    <li>Warm, realistic tone</li>'
    }),
    new mic({
        name: 'MXL 2001',
        img: 'resources/img/mxl2001.jpg',
        type: 'Condenser',
        pattern: 'Cardioid',
        response: '30 Hz - 20 kHz',
        SPL: '130 dB (for THD 0.5%)',
        impedance: '200 ohms',
        SNR: '80 dB (A weighted)',
        noise: '18 dB (A weighted)',
        description: '<li>Cardioid condenser</li>\
                    <li>Can be used for vocals and guitars</li>\
                    <li>Rich mid-range and top end</li>\
                    <li>Phantom powered</li>'
    })
];