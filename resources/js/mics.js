function mic(args) {
    this.name = args.name ? args.name : "N/A";
    this.img = args.img ? args.img : "N/A";
    this.type = args.type ? args.type : "N/A";
    this.pattern = args.pattern ? args.pattern : "N/A";
    this.response = args.response ? args.response : "N/A";
    this.SPL = args.SPL ? args.SPL : "N/A";
    this.impedance = args.impedance ? args.impedance : "N/A";
    this.SNR = args.SNR ? args.SNR : "N/A";
    this.noise = args.noise ? args.noise : "N/A";
}

var mics = [
    new mic({
        name: 'Royer R-122',
        img: 'resources/img/royer122.jpg',
        type: 'Ribbon',
        pattern: 'Figure-8',
        response: '30 Hz - 15 kHz',
        SPL: '135 dB',
        impedance: '200 ohms'
    }),
    new mic({
        name: 'Shure SM57',
        img: 'resources/img/shuresm57.jpg',
        type: 'Dynamic',
        pattern: 'Cardioid',
        response: '40 Hz - 15 kHz',
        impedance: '150 ohms'
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
        noise: '7dB (A weighted)'
    }),
    new mic({
        name: 'Shure SM7B',
        img: 'resources/img/shuresm7b.jpg',
        type: 'Dynamic',
        pattern: 'Cardioid',
        response: '50 Hz - 20 kHz',
        impedance: '150 ohms'
    })
];