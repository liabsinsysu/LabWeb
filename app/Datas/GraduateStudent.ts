export const CurrentStudent:Student[]=[
    {name:"黃宣慈",photoPath:"aaa.jpg",describe:"asdasdasdsad"},
    {name:"范依玟",photoPath:"aaa.jpg",describe:"asdasdasdsad"},
    {name:"黃瑄貽",photoPath:"aaa.jpg",describe:"asdasdasdsad"},
    {name:"陳姵汶",photoPath:"aaa.jpg",describe:"asdasdasdsad"},
    {name:"麥明輝",photoPath:"aaa.jpg",describe:"asdasdasdsad"},
    {name:"黃怡甄",photoPath:"aaa.jpg",describe:"asdasdasdsad"},
    {name:"林微訢",photoPath:"aaa.jpg",describe:"asdasdasdsad"},
]

export interface Student{
    name:string,
    photoPath:string,
    describe:string,
}

export interface Alumni{
    thesisTitle: string,
    projectorImgPath: string,
    thesisAbtrast: string
}

export type AlumniData = Student & Alumni;

export const GraduateStudent:(Student&Alumni)[]=[
  {
    name: "黃建榮",
    photoPath: "/member/zoom/rong.jpg",
    describe: "嗨伙計們！我是建榮，你們的「老大哥」，曾在這裡歡樂度過時光。現在我是和碩集團的韌體工程師！當年2022年畢業，走進社會成為新鮮人，開始當社畜，但還好我還有運動可以幫我舒壓QAQ。當初研究生的路，辛酸滋味我懂！夜以繼日的奮鬥、資料探索的掙扎，還有無窮無盡的論文海，這些經驗都讓我珍惜以前的日子。在這個實驗室，我希望看到你們這些年輕的『傑出』學弟妹們，打造出令人瞠目結舌的研究！",
    thesisTitle: "流體速度對於背景抑制磁振影像之影響：電腦模擬與仿體研究",
    projectorImgPath: "/member/zoom/rong2.jpg",
    thesisAbtrast: "本研究引入背景抑制技術，在使用此技術基礎下，研究探討血液流速對影像的影響。使用了具有不同氯化鎳濃度的靜態組織模擬物和模擬穩定血流的流體模擬物。結果顯示不同抑制設置之間的背景抑制效果相似。此外，流體模擬實驗表明在不同的參數設置中，信號強度會隨著流速降低而有明顯對應的訊號變化。透過本研究流體仿體實驗，驗證了流體流速對背景抑制效果的影響。期望未來能致力於改進信號模型，以實現更準確的實驗模擬結果。",
  },
  {
    name: "邵莉雅",
    photoPath: "member/zoom/liya.jpg",
    describe: "邵莉雅，於2021年畢業於中原大學物理系，並且在2023年取得國立中山大學電機工程所碩士。個性溫和，喜歡欣賞各種影集。",
    thesisTitle: "使用徑向三迴波穩態掃描進行三維全腦弛緩時間研究",
    projectorImgPath: "member/zoom/liya2.png",
    thesisAbtrast: "● 使用黃金徑像取樣TESS掃描序列，定量MR弛緩時間參數：T1和T2。● 製作仿體進行實驗，針對方法進行驗證。● 受試者實驗，能以時間7分半鐘內完成全腦掃描，經計算獲得三維的T1和T2 map影像。",
  },
  {
    name: "楊翎",
    photoPath: "member/zoom/R0.jpg",
    describe: "楊翎於2021年畢業於私立銘傳大學。她於2023年獲得國立中山大學資訊工程學系碩士學位。她熱衷於策略型遊戲和解謎，這反映了她的策略性思考和對細節的專注。",
    thesisTitle: "利用磁化準備平衡穩定態序列定量血液T2：測量方法與變因",
    projectorImgPath: "member/zoom/R02.jpg",
    thesisAbtrast: "磁振造影（MRI）在現代醫學中扮演關鍵角色，尤其是T2的估計與血氧濃度的評估。本研究透過T2磁化準備技術於MRI中生成具有不同T2對比度的影像，以提升T2估算的精確度。採用特殊MRI掃描序列如背景抑制和bSSFP，並進行參數調整，結果顯示這些技術可以有效提高T2測量的精確性。",
  },
  {
    name: "潘文浩",
    photoPath: "member/zoom/hank.jpg",
    describe: "潘文浩於2021年畢業於國立屏東大學資訊工程學系,目前正就讀於國立中山大學資訊工程研究所。他平時的喜好諸如:閱讀小說、看影集……等等。",
    thesisTitle: "利用磁化準備平衡穩定態序列定量血液T2：測量方法與變因",
    projectorImgPath: "member/zoom/hank2.gif",
    thesisAbtrast: "在他的碩士論文裡頭，主要內容為將原始取得的頭部MRI影像中的雜訊，透過濾波器的形式達到降噪的效果。",
  },
  
  {
    name: "王姿淇",
    photoPath: "member/zoom/chi.jpg",
    describe: "王姿淇，在2016年畢業於暨南大學資訊工程系，並在2023年完成中山大學資工所學位。喜歡看小說與動漫，偏好玄幻與運動類型的作品。",
    thesisTitle: "基於機率密度函數方式加速黃金角度徑向取樣法",
    projectorImgPath: "member/zoom/chi2.png",
    thesisAbtrast: "畢業論文題目是對黃金角度徑向取樣法進行加速。使用全取樣的資料進行模擬，利用三種不同的機率密度函數進行稀疏取樣來實現加速的目的。並比較三種方法的成像差異，從中選出較好的結果，再與常見的加速方法比較。",
  },
  
  {
    name: "梁昱威",
    photoPath: "member/zoom/yuwei.png",
    describe: "梁昱威於2024年取得國立中山大學資訊工程學系碩士學位。家裡養了兩隻可愛的狗，平常的興趣是跟狗玩。",
    thesisTitle: "使用點擴散函數與GMSD評估CIRCUS欠採樣策略與重建影像品質",
    projectorImgPath: "member/zoom/yuwei2.gif",
    thesisAbtrast: "本研究聚焦於CIRCUS採樣策略，結合壓縮感知技術進行影像重建，系統性地分析了CIRCUS在不同隨機化調節係數下對MRI影像品質的影響，並且初步發現了PSF的能量分佈形態與影像重建品質之間存在高度的相關性。",
  },
  
  {
    name: "黃柏琮",
    photoPath: "member/zoom/bo.jpg",
    describe: "這是柏琮，在2022年畢業於國立臺中教育大學資訊工程學系，並於同一年加入國立中山大學資訊工程學系智慧生醫信號分析實驗室。柏琮喜歡的休閒娛樂是打籃球和底片攝影，但柏琮表示底片攝影的興趣可能快要維持不下去了，因為底片很貴。他說底片貴到快按不下快門。",
    thesisTitle: "加速傅立葉流速編碼:以壓縮感知重建欠採樣流速頻率信號暨最高流速定量",
    projectorImgPath: "member/zoom/bo2.jpg",
    thesisAbtrast: "傅立葉流速編碼可以對血流流速進行解析，避免部分體積效應的問題。但傅立葉流速編碼需要收取多個不同流速編碼設定下的信號，導致其掃描時間較長。本研究在流速頻率維度的信號上進行欠採樣，並使用壓縮感知的技術重建流速解析，加速傅立葉流速編碼掃描，減少掃描時間。",
  },
];
