const defaultDeck = [
   {
      kanji: "丸",
      meaning: "Hình tròn",
      onYomi: "ガン",
      kunYomi: "まる・まるめる・まるい",
      similar: "九 刀 刃",
      stroke: 3,
      examples: {
         onYomi: [
            { word: "弾丸 (だんがん)", meaning: "Viên đạn", sentence: "彼は弾丸を避けた。" },
            { word: "丸薬 (がんやく)", meaning: "Thuốc viên", sentence: "この丸薬は毎日飲んでください。" }
         ],
         kunYomi: [
            { word: "丸 (まる)", meaning: "Hình tròn", sentence: "紙に丸を描いてください。" },
            { word: "丸める (まるめる)", meaning: "Cuộn tròn, vo tròn", sentence: "紙を丸めてゴミ箱に捨てた。" },
            { word: "丸い (まるい)", meaning: "Tròn", sentence: "このテーブルは丸いです。" }
         ]
      }
   },
   {
      kanji: "久",
      meaning: "Lâu dài",
      onYomi: "キュウ・ク",
      kunYomi: "ひさしい",
      similar: "",
      stroke: 3,
      examples: {
         onYomi: [
            { word: "永久 (えいきゅう)", meaning: "Vĩnh cửu", sentence: "友情は永久に続く。" },
            { word: "久遠 (くおん)", meaning: "Vĩnh hằng", sentence: "久遠の命を願う。" }
         ],
         kunYomi: [
            { word: "久しい (ひさしい)", meaning: "Đã lâu", sentence: "彼に会うのは久しい。" }
         ]
      }
   },
   {
      kanji: "才",
      meaning: "Tài năng, tuổi",
      onYomi: "サイ",
      kunYomi: "",
      similar: "丈",
      stroke: 3,
      examples: {
         onYomi: [
            { word: "天才 (てんさい)", meaning: "Thiên tài", sentence: "彼は音楽の天才だ。" },
            { word: "何才 (なんさい)", meaning: "Bao nhiêu tuổi", sentence: "あなたは何才ですか？" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "支",
      meaning: "Chi, chống đỡ",
      onYomi: "シ",
      kunYomi: "ささえる",
      similar: "友, 反, 返, 仮",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "支持 (しじ)", meaning: "Ủng hộ", sentence: "彼は計画を支持した。" }
         ],
         kunYomi: [
            { word: "支える (ささえる)", meaning: "Chống đỡ", sentence: "柱が屋根を支えている。" }
         ]
      }
   },
   {
      kanji: "戸",
      meaning: "Cửa",
      onYomi: "コ",
      kunYomi: "と",
      similar: "声, 芦, 房",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "戸籍 (こせき)", meaning: "Hộ tịch", sentence: "戸籍を提出してください。" }
         ],
         kunYomi: [
            { word: "戸 (と)", meaning: "Cánh cửa", sentence: "戸を閉めてください。" }
         ]
      }
   },
   {
      kanji: "欠",
      meaning: "Thiếu, khuyết",
      onYomi: "ケツ",
      kunYomi: "かける・かく",
      similar: "次, 沈",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "欠席 (けっせき)", meaning: "Vắng mặt", sentence: "彼は会議を欠席した。" }
         ],
         kunYomi: [
            { word: "欠ける (かける)", meaning: "Thiếu, sứt mẻ", sentence: "皿が欠けている。" }
         ]
      }
   },
   {
      kanji: "王",
      meaning: "Vua",
      onYomi: "オウ",
      kunYomi: "",
      similar: "主, 玉, 住, 往, 宝",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "王様 (おうさま)", meaning: "Nhà vua", sentence: "王様が国を治める。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "化",
      meaning: "Biến hóa",
      onYomi: "カ・ケ",
      kunYomi: "ばける・ばかす",
      similar: "花",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "文化 (ぶんか)", meaning: "Văn hóa", sentence: "日本文化を学ぶ。" }
         ],
         kunYomi: [
            { word: "化ける (ばける)", meaning: "Hóa thành", sentence: "狐が人に化けた。" }
         ]
      }
   },
   {
      kanji: "内",
      meaning: "Bên trong",
      onYomi: "ナイ",
      kunYomi: "うち",
      similar: "丙, 肉",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "内容 (ないよう)", meaning: "Nội dung", sentence: "本の内容を説明する。" }
         ],
         kunYomi: [
            { word: "内 (うち)", meaning: "Bên trong", sentence: "家の内に入る。" }
         ]
      }
   },
   {
      kanji: "反",
      meaning: "Phản đối",
      onYomi: "ハン",
      kunYomi: "そる・そらす",
      similar: "友, 返, 支, 仮",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "反対 (はんたい)", meaning: "Phản đối", sentence: "彼は提案に反対した。" }
         ],
         kunYomi: [
            { word: "反る (そる)", meaning: "Cong", sentence: "板が反っている。" }
         ]
      }
   },
   {
      kanji: "比",
      meaning: "So sánh",
      onYomi: "ヒ",
      kunYomi: "くらべる",
      similar: "北, 兆, 批, 挑, 逃, 眺",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "比例 (ひれい)", meaning: "Tỉ lệ", sentence: "人口に比例して増える。" }
         ],
         kunYomi: [
            { word: "比べる (くらべる)", meaning: "So sánh", sentence: "兄と弟を比べる。" }
         ]
      }
   },
   {
      kanji: "夫",
      meaning: "Người chồng",
      onYomi: "フ・フウ",
      kunYomi: "おっと",
      similar: "天, 失",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "夫婦 (ふうふ)", meaning: "Vợ chồng", sentence: "夫婦は仲良く暮らしている。" }
         ],
         kunYomi: [
            { word: "夫 (おっと)", meaning: "Chồng", sentence: "彼は私の夫です。" }
         ]
      }
   },
   {
      kanji: "仏",
      meaning: "Phật, nước Pháp",
      onYomi: "ブツ",
      kunYomi: "ほとけ",
      similar: "払",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "仏教 (ぶっきょう)", meaning: "Phật giáo", sentence: "仏教を学ぶ。" }
         ],
         kunYomi: [
            { word: "仏 (ほとけ)", meaning: "Phật", sentence: "仏を拝む。" }
         ]
      }
   },
   {
      kanji: "毛",
      meaning: "Lông, tóc",
      onYomi: "モウ",
      kunYomi: "け",
      similar: "手, 子, 了, 孑, 矛",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "毛布 (もうふ)", meaning: "Chăn", sentence: "毛布をかけて寝る。" }
         ],
         kunYomi: [
            { word: "毛 (け)", meaning: "Lông, tóc", sentence: "犬の毛が長い。" }
         ]
      }
   },
   {
      kanji: "予",
      meaning: "Dự định",
      onYomi: "ヨ",
      kunYomi: "",
      similar: "田, 甲, 申, 油",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "予定 (よてい)", meaning: "Dự định", sentence: "旅行の予定を立てる。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "由",
      meaning: "Nguyên do",
      onYomi: "ユ・ユウ",
      kunYomi: "よし",
      similar: "末, 木, 本",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "理由 (りゆう)", meaning: "Lý do", sentence: "理由を説明してください。" }
         ],
         kunYomi: [
            { word: "由 (よし)", meaning: "Nguyên do", sentence: "それは由ある話だ。" }
         ]
      }
   },
   {
      kanji: "未",
      meaning: "Chưa",
      onYomi: "ミ",
      kunYomi: "いまだ",
      similar: "末, 木, 本",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "未来 (みらい)", meaning: "Tương lai", sentence: "未来を信じる。" }
         ],
         kunYomi: [
            { word: "未だ (いまだ)", meaning: "Vẫn chưa", sentence: "未だ解決していない。" }
         ]
      }
   },
   {
      kanji: "布",
      meaning: "Vải, bố trí",
      onYomi: "フ",
      kunYomi: "ぬの",
      similar: "怖, 市, 柿",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "布団 (ふとん)", meaning: "Chăn nệm", sentence: "布団で寝る。" }
         ],
         kunYomi: [
            { word: "布 (ぬの)", meaning: "Vải", sentence: "布で服を作る。" }
         ]
      }
   },
   {
      kanji: "包",
      meaning: "Bao, gói",
      onYomi: "ホウ",
      kunYomi: "つつむ",
      similar: "抱, 泡, 危",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "包装 (ほうそう)", meaning: "Đóng gói", sentence: "商品を包装する。" }
         ],
         kunYomi: [
            { word: "包む (つつむ)", meaning: "Gói", sentence: "贈り物を包む。" }
         ]
      }
   },
   {
      kanji: "末",
      meaning: "Cuối, ngọn",
      onYomi: "マツ, バツ",
      kunYomi: "すえ",
      similar: "未, 木, 本",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "週末 (しゅうまつ)", meaning: "Cuối tuần", sentence: "週末に旅行する。" }
         ],
         kunYomi: [
            { word: "末 (すえ)", meaning: "Cuối, ngọn", sentence: "木の末に花が咲く。" }
         ]
      }
   },
   {
      kanji: "平",
      meaning: "Bình, bằng phẳng",
      onYomi: "ヘイ, ビョウ",
      kunYomi: "たいら, ひら",
      similar: "半, 乎",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "平和 (へいわ)", meaning: "Hòa bình", sentence: "世界の平和を願う。" }
         ],
         kunYomi: [
            { word: "平ら (たいら)", meaning: "Bằng phẳng", sentence: "道が平らだ。" }
         ]
      }
   },
   {
      kanji: "辺",
      meaning: "Khu vực, vùng",
      onYomi: "ヘン",
      kunYomi: "あたり, べ",
      similar: "近",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "周辺 (しゅうへん)", meaning: "Vùng xung quanh", sentence: "駅の周辺を散歩する。" }
         ],
         kunYomi: [
            { word: "辺り (あたり)", meaning: "Khu vực", sentence: "辺りを見回す。" }
         ]
      }
   },
   {
      kanji: "氷",
      meaning: "Nước đá",
      onYomi: "ヒョウ",
      kunYomi: "こおり, ひ",
      similar: "永, 水",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "氷山 (ひょうざん)", meaning: "Núi băng", sentence: "氷山が海に浮かぶ。" }
         ],
         kunYomi: [
            { word: "氷 (こおり)", meaning: "Nước đá", sentence: "氷を入れた飲み物。" }
         ]
      }
   },
   {
      kanji: "付",
      meaning: "Gắn, kèm theo",
      onYomi: "フ",
      kunYomi: "つける, つく",
      similar: "村, 材, 吋, 寸",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "付録 (ふろく)", meaning: "Phụ lục", sentence: "本に付録が付いている。" }
         ],
         kunYomi: [
            { word: "付ける (つける)", meaning: "Gắn, đính", sentence: "名前を付ける。" }
         ]
      }
   },
   {
      kanji: "皮",
      meaning: "Da, vỏ",
      onYomi: "ヒ",
      kunYomi: "かわ",
      similar: "彼, 被, 疲, 波, 披",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "皮膚 (ひふ)", meaning: "Da", sentence: "皮膚を守る。" }
         ],
         kunYomi: [
            { word: "皮 (かわ)", meaning: "Da, vỏ", sentence: "果物の皮をむく。" }
         ]
      }
   },
   {
      kanji: "犯",
      meaning: "Phạm, tội",
      onYomi: "ハン",
      kunYomi: "おかす",
      similar: "",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "犯罪 (はんざい)", meaning: "Tội phạm", sentence: "犯罪を防ぐ。" }
         ],
         kunYomi: [
            { word: "犯す (おかす)", meaning: "Phạm phải", sentence: "過ちを犯す。" }
         ]
      }
   },
   {
      kanji: "必",
      meaning: "Tất yếu",
      onYomi: "ヒツ",
      kunYomi: "かならず",
      similar: "泌, 心, 応",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "必要 (ひつよう)", meaning: "Cần thiết", sentence: "水は必要だ。" }
         ],
         kunYomi: [
            { word: "必ず (かならず)", meaning: "Nhất định", sentence: "必ず成功する。" }
         ]
      }
   },
   {
      kanji: "石",
      meaning: "Đá",
      onYomi: "セキ, シャク, コク",
      kunYomi: "いし",
      similar: "右, 若",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "石油 (せきゆ)", meaning: "Dầu mỏ", sentence: "石油を輸入する。" }
         ],
         kunYomi: [
            { word: "石 (いし)", meaning: "Hòn đá", sentence: "石を拾う。" }
         ]
      }
   },
   {
      kanji: "他",
      meaning: "Khác",
      onYomi: "タ",
      kunYomi: "ほか",
      similar: "地, 池, 也",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "他人 (たにん)", meaning: "Người khác", sentence: "他人を助ける。" }
         ],
         kunYomi: [
            { word: "他 (ほか)", meaning: "Khác", sentence: "他の方法を試す。" }
         ]
      }
   },
   {
      kanji: "打",
      meaning: "Đánh",
      onYomi: "ダ",
      kunYomi: "うつ",
      similar: "折, 祈, 討",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "打撃 (だげき)", meaning: "Đòn đánh", sentence: "打撃を受けた。" }
         ],
         kunYomi: [
            { word: "打つ (うつ)", meaning: "Đánh, bắn", sentence: "ボールを打つ。" }
         ]
      }
   },
   {
      kanji: "加",
      meaning: "Thêm vào, gia tăng",
      onYomi: "カ",
      kunYomi: "くわえる・くわわる",
      similar: "伽, 茄, 迦",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "参加 (さんか)", meaning: "Tham gia", sentence: "会議に参加する。" },
            { word: "加速 (かそく)", meaning: "Tăng tốc", sentence: "車が加速する。" }
         ],
         kunYomi: [
            { word: "加える (くわえる)", meaning: "Thêm vào", sentence: "塩を料理に加える。" },
            { word: "加わる (くわわる)", meaning: "Tham gia, gia nhập", sentence: "彼がチームに加わった。" }
         ]
      }
   },
   {
      kanji: "可",
      meaning: "Khả năng, có thể",
      onYomi: "カ",
      kunYomi: "",
      similar: "司, 何, 河, 苛, 珂, 荷, 句",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "可能 (かのう)", meaning: "Khả năng", sentence: "成功は可能だ。" },
            { word: "可決 (かけつ)", meaning: "Thông qua (nghị quyết)", sentence: "法案が可決された。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "央",
      meaning: "Trung tâm",
      onYomi: "オウ",
      kunYomi: "",
      similar: "英, 映",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "中央 (ちゅうおう)", meaning: "Trung ương, trung tâm", sentence: "中央に集まる。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "刊",
      meaning: "Xuất bản",
      onYomi: "カン",
      kunYomi: "",
      similar: "利",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "週刊 (しゅうかん)", meaning: "Tuần san", sentence: "週刊誌を読む。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "玉",
      meaning: "Ngọc, viên ngọc",
      onYomi: "ギョク",
      kunYomi: "たま",
      similar: "主, 住, 往, 王, 宝, 国",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "宝玉 (ほうぎょく)", meaning: "Ngọc quý", sentence: "宝玉を大切にする。" }
         ],
         kunYomi: [
            { word: "玉 (たま)", meaning: "Viên ngọc, quả cầu", sentence: "玉のように美しい。" }
         ]
      }
   },
   {
      kanji: "旧",
      meaning: "Cũ, xưa",
      onYomi: "キュウ",
      kunYomi: "ふるい",
      similar: "旦",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "旧友 (きゅうゆう)", meaning: "Bạn cũ", sentence: "旧友に再会した。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "号",
      meaning: "Số, hiệu",
      onYomi: "ゴウ",
      kunYomi: "",
      similar: "",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "番号 (ばんごう)", meaning: "Số hiệu", sentence: "電話番号を教えてください。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "皿",
      meaning: "Cái đĩa",
      onYomi: "サラ",
      kunYomi: "",
      similar: "血",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "皿洗い (さらあらい)", meaning: "Rửa bát", sentence: "皿洗いをする。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "札",
      meaning: "Thẻ, tấm bảng",
      onYomi: "サツ",
      kunYomi: "ふだ",
      similar: "朹, 朷, 朸, 礼, 社",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "札幌 (さっぽろ)", meaning: "Tên địa danh Sapporo", sentence: "札幌に住んでいる。" }
         ],
         kunYomi: [
            { word: "札 (ふだ)", meaning: "Thẻ, bảng", sentence: "名前札をつける。" }
         ]
      }
   },
   {
      kanji: "史",
      meaning: "Lịch sử",
      onYomi: "シ",
      kunYomi: "",
      similar: "使, 便, 更, 洩",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "歴史 (れきし)", meaning: "Lịch sử", sentence: "歴史を学ぶ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "失",
      meaning: "Mất, thất bại",
      onYomi: "シツ",
      kunYomi: "うしなう",
      similar: "夫, 天, 矢",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "失敗 (しっぱい)", meaning: "Thất bại", sentence: "試験に失敗した。" }
         ],
         kunYomi: [
            { word: "失う (うしなう)", meaning: "Mất", sentence: "財布を失った。" }
         ]
      }
   },
   {
      kanji: "示",
      meaning: "Chỉ ra, biểu thị",
      onYomi: "ジ, シ",
      kunYomi: "しめす",
      similar: "",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "表示 (ひょうじ)", meaning: "Biểu thị", sentence: "画面に表示される。" }
         ],
         kunYomi: [
            { word: "示す (しめす)", meaning: "Chỉ ra", sentence: "地図で場所を示す。" }
         ]
      }
   },
   {
      kanji: "申",
      meaning: "Trình bày, khai báo",
      onYomi: "シン",
      kunYomi: "もうす",
      similar: "甲, 由, 油, 田",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "申請 (しんせい)", meaning: "Đăng ký, xin phép", sentence: "ビザを申請する。" }
         ],
         kunYomi: [
            { word: "申す (もうす)", meaning: "Nói (khiêm nhường)", sentence: "私は田中と申します。" }
         ]
      }
   },
   {
      kanji: "礼",
      meaning: "Lễ, cảm ơn",
      onYomi: "レイ",
      kunYomi: "",
      similar: "札, 社, 乱",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "礼儀 (れいぎ)", meaning: "Lễ nghi", sentence: "礼儀を守る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "令",
      meaning: "Mệnh lệnh",
      onYomi: "レイ",
      kunYomi: "",
      similar: "命",
      stroke: 5,
      examples: {
         onYomi: [
            { word: "命令 (めいれい)", meaning: "Mệnh lệnh", sentence: "命令に従う。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "列",
      meaning: "Hàng, dãy",
      onYomi: "レツ",
      kunYomi: "",
      similar: "例, 烈",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "列車 (れっしゃ)", meaning: "Xe lửa", sentence: "列車に乗る。" },
            { word: "行列 (ぎょうれつ)", meaning: "Hàng người", sentence: "店の前に行列ができた。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "老",
      meaning: "Già",
      onYomi: "ロウ",
      kunYomi: "おいる, ふける",
      similar: "壱, 考, 孝",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "老人 (ろうじん)", meaning: "Người già", sentence: "老人を助ける。" }
         ],
         kunYomi: [
            { word: "老いる (おいる)", meaning: "Già đi", sentence: "人は誰でも老いる。" }
         ]
      }
   },
   {
      kanji: "式",
      meaning: "Nghi lễ, công thức",
      onYomi: "シキ",
      kunYomi: "",
      similar: "弐, 代, 以, 似, 成, 武",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "式典 (しきてん)", meaning: "Buổi lễ", sentence: "卒業式典に参加する。" },
            { word: "公式 (こうしき)", meaning: "Công thức", sentence: "公式を使って計算する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "州",
      meaning: "Bang, châu",
      onYomi: "シュウ",
      kunYomi: "",
      similar: "洲, 川",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "州立 (しゅうりつ)", meaning: "Thuộc bang", sentence: "州立大学に通う。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "寺",
      meaning: "Chùa",
      onYomi: "ジ",
      kunYomi: "てら",
      similar: "等",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "寺院 (じいん)", meaning: "Chùa chiền", sentence: "寺院を訪れる。" }
         ],
         kunYomi: [
            { word: "寺 (てら)", meaning: "Chùa", sentence: "京都の寺を見学する。" }
         ]
      }
   },
   {
      kanji: "次",
      meaning: "Tiếp theo",
      onYomi: "ジ, シ",
      kunYomi: "つぎ",
      similar: "欠, 沈",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "次回 (じかい)", meaning: "Lần sau", sentence: "次回の会議は来週です。" }
         ],
         kunYomi: [
            { word: "次 (つぎ)", meaning: "Tiếp theo", sentence: "次の駅で降ります。" }
         ]
      }
   },
   {
      kanji: "守",
      meaning: "Bảo vệ",
      onYomi: "シュ, ス",
      kunYomi: "まもる, もり",
      similar: "宇, 字, 学, 苧, 狩",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "守備 (しゅび)", meaning: "Phòng thủ", sentence: "守備を固める。" }
         ],
         kunYomi: [
            { word: "守る (まもる)", meaning: "Bảo vệ", sentence: "約束を守る。" }
         ]
      }
   },
   {
      kanji: "糸",
      meaning: "Sợi chỉ",
      onYomi: "シ",
      kunYomi: "いと",
      similar: "係, 幺",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "毛糸 (けいと)", meaning: "Len", sentence: "毛糸でセーターを編む。" }
         ],
         kunYomi: [
            { word: "糸 (いと)", meaning: "Sợi chỉ", sentence: "糸で縫う。" }
         ]
      }
   },
   {
      kanji: "在",
      meaning: "Tồn tại, có mặt",
      onYomi: "ザイ",
      kunYomi: "ある",
      similar: "圧, 佐, 左",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "存在 (そんざい)", meaning: "Sự tồn tại", sentence: "神の存在を信じる。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "再",
      meaning: "Lại, tái",
      onYomi: "サイ, サ",
      kunYomi: "ふたたび",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "再会 (さいかい)", meaning: "Tái ngộ", sentence: "友人と再会した。" }
         ],
         kunYomi: [
            { word: "再び (ふたたび)", meaning: "Lại, một lần nữa", sentence: "再び挑戦する。" }
         ]
      }
   },
   {
      kanji: "向",
      meaning: "Hướng về",
      onYomi: "コウ",
      kunYomi: "むく, むける, むかう, むこう",
      similar: "同",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "方向 (ほうこう)", meaning: "Phương hướng", sentence: "方向を変える。" }
         ],
         kunYomi: [
            { word: "向かう (むかう)", meaning: "Đi về phía", sentence: "駅に向かう。" }
         ]
      }
   },
   {
      kanji: "交",
      meaning: "Giao nhau, trao đổi",
      onYomi: "コウ",
      kunYomi: "まじる, まじわる, まじえる, まぜる",
      similar: "父, 文, 効, 六, 穴",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "交通 (こうつう)", meaning: "Giao thông", sentence: "交通が便利だ。" }
         ],
         kunYomi: [
            { word: "交わる (まじわる)", meaning: "Giao nhau", sentence: "道が交わる。" }
         ]
      }
   },
   {
      kanji: "血",
      meaning: "Máu",
      onYomi: "ケツ",
      kunYomi: "ち",
      similar: "皿",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "血液 (けつえき)", meaning: "Máu", sentence: "血液検査を受ける。" }
         ],
         kunYomi: [
            { word: "血 (ち)", meaning: "Máu", sentence: "血が出ている。" }
         ]
      }
   },
   {
      kanji: "件",
      meaning: "Vụ việc",
      onYomi: "ケン",
      kunYomi: "",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "事件 (じけん)", meaning: "Sự kiện, vụ việc", sentence: "事件が起きた。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "共",
      meaning: "Cùng nhau",
      onYomi: "キョウ",
      kunYomi: "とも",
      similar: "供",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "共同 (きょうどう)", meaning: "Hợp tác", sentence: "共同で研究する。" }
         ],
         kunYomi: [
            { word: "共に (ともに)", meaning: "Cùng nhau", sentence: "友と共に歩む。" }
         ]
      }
   },
   {
      kanji: "曲",
      meaning: "Khúc, gấp khúc",
      onYomi: "キョク",
      kunYomi: "まがる, まげる",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "歌曲 (かきょく)", meaning: "Bài hát", sentence: "美しい歌曲を聴く。" }
         ],
         kunYomi: [
            { word: "曲がる (まがる)", meaning: "Rẽ, cong", sentence: "角を曲がる。" }
         ]
      }
   },
   {
      kanji: "各",
      meaning: "Mỗi, các",
      onYomi: "カク",
      kunYomi: "",
      similar: "客, 挌, 格, 名",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "各国 (かっこく)", meaning: "Các nước", sentence: "各国の文化を学ぶ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "印",
      meaning: "Dấu, in",
      onYomi: "イン",
      kunYomi: "しるし",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "印刷 (いんさつ)", meaning: "In ấn", sentence: "本を印刷する。" }
         ],
         kunYomi: [
            { word: "印 (しるし)", meaning: "Dấu hiệu", sentence: "成功の印だ。" }
         ]
      }
   },
   {
      kanji: "因",
      meaning: "Nguyên nhân",
      onYomi: "イン",
      kunYomi: "よる",
      similar: "困, 咽",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "原因 (げんいん)", meaning: "Nguyên nhân", sentence: "事故の原因を調べる。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "羽",
      meaning: "Cánh",
      onYomi: "ウ",
      kunYomi: "は, はね",
      similar: "弱",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "羽毛 (うもう)", meaning: "Lông vũ", sentence: "羽毛布団で寝る。" }
         ],
         kunYomi: [
            { word: "羽 (はね)", meaning: "Cánh", sentence: "鳥の羽が美しい。" }
         ]
      }
   },
   {
      kanji: "団",
      meaning: "Đoàn thể",
      onYomi: "ダン",
      kunYomi: "",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "団体 (だんたい)", meaning: "Tập thể", sentence: "団体旅行に参加する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "竹",
      meaning: "Tre",
      onYomi: "チク",
      kunYomi: "たけ",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "竹林 (ちくりん)", meaning: "Rừng tre", sentence: "竹林を散歩する。" }
         ],
         kunYomi: [
            { word: "竹 (たけ)", meaning: "Tre", sentence: "竹でかごを作る。" }
         ]
      }
   },
   {
      kanji: "仲",
      meaning: "Quan hệ, bạn bè",
      onYomi: "チュウ",
      kunYomi: "なか",
      similar: "沖, 中",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "仲間 (なかま)", meaning: "Bạn bè, đồng đội", sentence: "仲間と遊ぶ。" }
         ],
         kunYomi: [
            { word: "仲 (なか)", meaning: "Quan hệ", sentence: "彼とは仲が良い。" }
         ]
      }
   },
   {
      kanji: "虫",
      meaning: "Côn trùng",
      onYomi: "チュウ",
      kunYomi: "むし",
      similar: "風, 独",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "害虫 (がいちゅう)", meaning: "Côn trùng gây hại", sentence: "害虫を駆除する。" }
         ],
         kunYomi: [
            { word: "虫 (むし)", meaning: "Côn trùng", sentence: "虫が飛んでいる。" }
         ]
      }
   },
   {
      kanji: "兆",
      meaning: "Điềm báo, triệu chứng",
      onYomi: "チョウ",
      kunYomi: "きざす, きざし",
      similar: "北, 逃, 批, 比, 挑, 眺",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "兆候 (ちょうこう)", meaning: "Triệu chứng, dấu hiệu", sentence: "病気の兆候がある。" }
         ],
         kunYomi: [
            { word: "兆し (きざし)", meaning: "Điềm báo", sentence: "春の兆しが見える。" }
         ]
      }
   },
   {
      kanji: "伝",
      meaning: "Truyền đạt",
      onYomi: "デン",
      kunYomi: "つたえる, つたわる",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "伝統 (でんとう)", meaning: "Truyền thống", sentence: "日本の伝統を守る。" }
         ],
         kunYomi: [
            { word: "伝える (つたえる)", meaning: "Truyền đạt", sentence: "気持ちを伝える。" }
         ]
      }
   },
   {
      kanji: "当",
      meaning: "Đúng, trúng, thích hợp",
      onYomi: "トウ",
      kunYomi: "あたる, あてる",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "当然 (とうぜん)", meaning: "Đương nhiên", sentence: "当然の結果だ。" }
         ],
         kunYomi: [
            { word: "当たる (あたる)", meaning: "Trúng, đúng", sentence: "宝くじに当たった。" }
         ]
      }
   },
   {
      kanji: "成",
      meaning: "Thành công, trở thành",
      onYomi: "セイ, ジョウ",
      kunYomi: "なる, なす",
      similar: "城, 戒, 誠, 盛, 式",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "成功 (せいこう)", meaning: "Thành công", sentence: "試験に成功した。" }
         ],
         kunYomi: [
            { word: "成る (なる)", meaning: "Trở thành", sentence: "夢が現実となる。" }
         ]
      }
   },
   {
      kanji: "全",
      meaning: "Toàn bộ",
      onYomi: "ゼン",
      kunYomi: "まったく, すべて",
      similar: "金, 余, 茶",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "全部 (ぜんぶ)", meaning: "Toàn bộ", sentence: "全部食べた。" }
         ],
         kunYomi: [
            { word: "全く (まったく)", meaning: "Hoàn toàn", sentence: "全く分からない。" }
         ]
      }
   },
   {
      kanji: "争",
      meaning: "Tranh giành",
      onYomi: "ソウ",
      kunYomi: "あらそう",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "戦争 (せんそう)", meaning: "Chiến tranh", sentence: "戦争は悲しい。" }
         ],
         kunYomi: [
            { word: "争う (あらそう)", meaning: "Tranh giành", sentence: "資源を争う。" }
         ]
      }
   },
   {
      kanji: "任",
      meaning: "Nhiệm vụ",
      onYomi: "ニン",
      kunYomi: "まかせる",
      similar: "仕",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "責任 (せきにん)", meaning: "Trách nhiệm", sentence: "責任を持つ。" }
         ],
         kunYomi: [
            { word: "任せる (まかせる)", meaning: "Giao phó", sentence: "仕事を任せる。" }
         ]
      }
   },
   {
      kanji: "米",
      meaning: "Gạo, nước Mỹ",
      onYomi: "ベイ, マイ",
      kunYomi: "こめ",
      similar: "来, 岡",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "米国 (べいこく)", meaning: "Nước Mỹ", sentence: "米国へ行く。" }
         ],
         kunYomi: [
            { word: "米 (こめ)", meaning: "Gạo", sentence: "米を炊く。" }
         ]
      }
   },
   {
      kanji: "両",
      meaning: "Cả hai",
      onYomi: "リョウ",
      kunYomi: "",
      similar: "刊, 私, 秋",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "両親 (りょうしん)", meaning: "Cha mẹ", sentence: "両親と住む。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "利",
      meaning: "Lợi ích",
      onYomi: "リ",
      kunYomi: "きく",
      similar: "全, 茶",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "利益 (りえき)", meaning: "Lợi ích", sentence: "利益を得る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "余",
      meaning: "Thừa, dư",
      onYomi: "ヨ",
      kunYomi: "あまる, あまり",
      similar: "坊, 阻",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "余分 (よぶん)", meaning: "Phần dư", sentence: "余分な荷物を置く。" }
         ],
         kunYomi: [
            { word: "余る (あまる)", meaning: "Thừa", sentence: "食べ物が余った。" }
         ]
      }
   },
   {
      kanji: "防",
      meaning: "Phòng chống",
      onYomi: "ボウ",
      kunYomi: "ふせぐ",
      similar: "殺, 投",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "防止 (ぼうし)", meaning: "Phòng ngừa", sentence: "事故を防止する。" }
         ],
         kunYomi: [
            { word: "防ぐ (ふせぐ)", meaning: "Ngăn chặn", sentence: "風邪を防ぐ。" }
         ]
      }
   },
   {
      kanji: "役",
      meaning: "Vai trò, nhiệm vụ",
      onYomi: "ヤク",
      kunYomi: "",
      similar: "殺",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "役割 (やくわり)", meaning: "Vai trò", sentence: "役割を果たす。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "返",
      meaning: "Trả lại",
      onYomi: "ヘン",
      kunYomi: "かえす, かえる",
      similar: "仮, 反, 友, 支",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "返事 (へんじ)", meaning: "Hồi đáp", sentence: "返事をする。" }
         ],
         kunYomi: [
            { word: "返す (かえす)", meaning: "Trả lại", sentence: "本を返す。" }
         ]
      }
   },
   {
      kanji: "判",
      meaning: "Phán đoán",
      onYomi: "ハン",
      kunYomi: "",
      similar: "半, 伴, 袢, 絆, 評",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "判断 (はんだん)", meaning: "Phán đoán", sentence: "状況を判断する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "臣",
      meaning: "Thần dân",
      onYomi: "シン, ジン",
      kunYomi: "",
      similar: "臥, 巨, 苣",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "臣民 (しんみん)", meaning: "Thần dân", sentence: "臣民は王に従う。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "身",
      meaning: "Thân thể",
      onYomi: "シン",
      kunYomi: "み",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "身体 (しんたい)", meaning: "Thân thể", sentence: "身体を鍛える。" }
         ],
         kunYomi: [
            { word: "身 (み)", meaning: "Thân mình", sentence: "身を守る。" }
         ]
      }
   },
   {
      kanji: "折",
      meaning: "Gấp, bẻ",
      onYomi: "セツ",
      kunYomi: "おる, おれる",
      similar: "祈, 打, 近",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "折角 (せっかく)", meaning: "Công phu, mất công", sentence: "折角の機会を逃すな。" }
         ],
         kunYomi: [
            { word: "折る (おる)", meaning: "Bẻ, gấp", sentence: "紙を折る。" }
         ]
      }
   },
   {
      kanji: "努",
      meaning: "Nỗ lực",
      onYomi: "ド",
      kunYomi: "つとめる",
      similar: "怒",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "努力 (どりょく)", meaning: "Nỗ lực", sentence: "努力すれば成功する。" }
         ],
         kunYomi: [
            { word: "努める (つとめる)", meaning: "Nỗ lực", sentence: "勉強に努める。" }
         ]
      }
   },
   {
      kanji: "投",
      meaning: "Ném, đầu tư",
      onYomi: "トウ",
      kunYomi: "なげる",
      similar: "殺, 役",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "投資 (とうし)", meaning: "Đầu tư", sentence: "株に投資する。" },
            { word: "投票 (とうひょう)", meaning: "Bỏ phiếu", sentence: "選挙で投票する。" }
         ],
         kunYomi: [
            { word: "投げる (なげる)", meaning: "Ném", sentence: "ボールを投げる。" }
         ]
      }
   },
   {
      kanji: "均",
      meaning: "Cân bằng, đồng đều",
      onYomi: "キン",
      kunYomi: "",
      similar: "",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "平均 (へいきん)", meaning: "Trung bình", sentence: "平均点を計算する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "形",
      meaning: "Hình dạng",
      onYomi: "ケイ, ギョウ",
      kunYomi: "かた, かたち",
      similar: "刑",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "形態 (けいたい)", meaning: "Hình thái", sentence: "社会の形態が変わる。" }
         ],
         kunYomi: [
            { word: "形 (かたち)", meaning: "Hình dạng", sentence: "形を整える。" }
         ]
      }
   },
   {
      kanji: "決",
      meaning: "Quyết định",
      onYomi: "ケツ",
      kunYomi: "きめる, きまる",
      similar: "快",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "決定 (けってい)", meaning: "Quyết định", sentence: "会議で決定する。" }
         ],
         kunYomi: [
            { word: "決める (きめる)", meaning: "Quyết định", sentence: "進路を決める。" }
         ]
      }
   },
   {
      kanji: "芸",
      meaning: "Nghệ thuật, tài năng",
      onYomi: "ゲイ",
      kunYomi: "",
      similar: "",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "芸術 (げいじゅつ)", meaning: "Nghệ thuật", sentence: "芸術を学ぶ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "求",
      meaning: "Yêu cầu, tìm kiếm",
      onYomi: "キュウ",
      kunYomi: "もとめる",
      similar: "救, 球",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "要求 (ようきゅう)", meaning: "Yêu cầu", sentence: "要求を受け入れる。" }
         ],
         kunYomi: [
            { word: "求める (もとめる)", meaning: "Yêu cầu, tìm kiếm", sentence: "真実を求める。" }
         ]
      }
   },
   {
      kanji: "希",
      meaning: "Hy vọng",
      onYomi: "キ",
      kunYomi: "",
      similar: "",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "希望 (きぼう)", meaning: "Hy vọng", sentence: "希望を持つ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "告",
      meaning: "Thông báo",
      onYomi: "コク",
      kunYomi: "つげる",
      similar: "岳, 缶, 古",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "広告 (こうこく)", meaning: "Quảng cáo", sentence: "広告を出す。" }
         ],
         kunYomi: [
            { word: "告げる (つげる)", meaning: "Thông báo", sentence: "別れを告げる。" }
         ]
      }
   },
   {
      kanji: "材",
      meaning: "Vật liệu",
      onYomi: "ザイ",
      kunYomi: "",
      similar: "村, 吋, 付",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "材料 (ざいりょう)", meaning: "Nguyên liệu", sentence: "料理の材料を買う。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "坂",
      meaning: "Dốc",
      onYomi: "ハン",
      kunYomi: "さか",
      similar: "阪",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "坂道 (さかみち)", meaning: "Đường dốc", sentence: "坂道を登る。" }
         ],
         kunYomi: [
            { word: "坂 (さか)", meaning: "Dốc", sentence: "急な坂を下る。" }
         ]
      }
   },
   {
      kanji: "似",
      meaning: "Giống",
      onYomi: "ジ",
      kunYomi: "にる",
      similar: "以, 式, 代",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "類似 (るいじ)", meaning: "Tương tự", sentence: "二つの作品は類似している。" }
         ],
         kunYomi: [
            { word: "似る (にる)", meaning: "Giống", sentence: "兄に似ている。" }
         ]
      }
   },
   {
      kanji: "児",
      meaning: "Trẻ em",
      onYomi: "ジ, ニ",
      kunYomi: "こ",
      similar: "",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "児童 (じどう)", meaning: "Nhi đồng", sentence: "児童が遊んでいる。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "状",
      meaning: "Tình trạng",
      onYomi: "ジョウ",
      kunYomi: "",
      similar: "伏, 壮",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "状態 (じょうたい)", meaning: "Trạng thái", sentence: "健康状態が良い。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "初",
      meaning: "Ban đầu",
      onYomi: "ショ",
      kunYomi: "はじめ, はつ",
      similar: "",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "初期 (しょき)", meaning: "Thời kỳ đầu", sentence: "病気の初期段階。" }
         ],
         kunYomi: [
            { word: "初め (はじめ)", meaning: "Ban đầu", sentence: "初めて会う人。" }
         ]
      }
   },
   {
      kanji: "助",
      meaning: "Giúp đỡ",
      onYomi: "ジョ",
      kunYomi: "たすける, すけ",
      similar: "",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "援助 (えんじょ)", meaning: "Viện trợ", sentence: "援助を受ける。" }
         ],
         kunYomi: [
            { word: "助ける (たすける)", meaning: "Giúp đỡ", sentence: "友達を助ける。" }
         ]
      }
   },
   {
      kanji: "労",
      meaning: "Lao động",
      onYomi: "ロウ",
      kunYomi: "",
      similar: "",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "労働 (ろうどう)", meaning: "Lao động", sentence: "労働者が働いている。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "冷",
      meaning: "Lạnh",
      onYomi: "レイ",
      kunYomi: "つめたい, ひえる, ひやす",
      similar: "",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "冷蔵庫 (れいぞうこ)", meaning: "Tủ lạnh", sentence: "冷蔵庫に入れる。" }
         ],
         kunYomi: [
            { word: "冷たい (つめたい)", meaning: "Lạnh", sentence: "水が冷たい。" }
         ]
      }
   },
   {
      kanji: "例",
      meaning: "Ví dụ",
      onYomi: "レイ",
      kunYomi: "たとえる",
      similar: "列, 烈",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "例文 (れいぶん)", meaning: "Câu ví dụ", sentence: "例文を読んで理解する。" },
            { word: "事例 (じれい)", meaning: "Trường hợp, ví dụ", sentence: "成功事例を紹介する。" }
         ],
         kunYomi: [
            { word: "例える (たとえる)", meaning: "Ví von, so sánh", sentence: "人生を旅に例える。" }
         ]
      }
   },
   {
      kanji: "和",
      meaning: "Hòa bình, Nhật Bản",
      onYomi: "ワ",
      kunYomi: "やわらぐ, なごむ",
      similar: "知, 味",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "平和 (へいわ)", meaning: "Hòa bình", sentence: "世界の平和を願う。" },
            { word: "和食 (わしょく)", meaning: "Ẩm thực Nhật", sentence: "和食が好きです。" }
         ],
         kunYomi: [
            { word: "和らぐ (やわらぐ)", meaning: "Êm dịu", sentence: "痛みが和らぐ。" }
         ]
      }
   },
   {
      kanji: "述",
      meaning: "Trình bày",
      onYomi: "ジュツ",
      kunYomi: "のべる",
      similar: "送, 迷, 辻",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "記述 (きじゅつ)", meaning: "Mô tả", sentence: "事実を記述する。" }
         ],
         kunYomi: [
            { word: "述べる (のべる)", meaning: "Trình bày", sentence: "意見を述べる。" }
         ]
      }
   },
   {
      kanji: "承",
      meaning: "Tiếp nhận, thừa nhận",
      onYomi: "ショウ",
      kunYomi: "うけたまわる",
      similar: "",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "承認 (しょうにん)", meaning: "Thừa nhận", sentence: "計画を承認する。" }
         ],
         kunYomi: [
            { word: "承る (うけたまわる)", meaning: "Tiếp nhận (khiêm nhường)", sentence: "ご注文を承ります。" }
         ]
      }
   },
   {
      kanji: "招",
      meaning: "Mời gọi",
      onYomi: "ショウ",
      kunYomi: "まねく",
      similar: "沼, 昭, 紹, 召, 照",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "招待 (しょうたい)", meaning: "Chiêu đãi, mời", sentence: "友達を招待する。" }
         ],
         kunYomi: [
            { word: "招く (まねく)", meaning: "Mời gọi", sentence: "危険を招く。" }
         ]
      }
   },
   {
      kanji: "実",
      meaning: "Thực tế, quả",
      onYomi: "ジツ",
      kunYomi: "み, みのる",
      similar: "美",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "実際 (じっさい)", meaning: "Thực tế", sentence: "実際に試してみる。" }
         ],
         kunYomi: [
            { word: "実る (みのる)", meaning: "Kết quả, ra quả", sentence: "努力が実る。" }
         ]
      }
   },
   {
      kanji: "取",
      meaning: "Lấy",
      onYomi: "シュ",
      kunYomi: "とる",
      similar: "",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "取得 (しゅとく)", meaning: "Giành được", sentence: "資格を取得する。" }
         ],
         kunYomi: [
            { word: "取る (とる)", meaning: "Lấy", sentence: "本を取る。" }
         ]
      }
   },
   {
      kanji: "治",
      meaning: "Trị liệu, cai trị",
      onYomi: "チ, ジ",
      kunYomi: "おさめる, なおす",
      similar: "台",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "政治 (せいじ)", meaning: "Chính trị", sentence: "政治を学ぶ。" },
            { word: "治療 (ちりょう)", meaning: "Trị liệu", sentence: "病気を治療する。" }
         ],
         kunYomi: [
            { word: "治す (なおす)", meaning: "Chữa trị", sentence: "風邪を治す。" }
         ]
      }
   },
   {
      kanji: "受",
      meaning: "Nhận",
      onYomi: "ジュ",
      kunYomi: "うける",
      similar: "采, 授, 菜, 採",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "受験 (じゅけん)", meaning: "Thi cử", sentence: "大学を受験する。" }
         ],
         kunYomi: [
            { word: "受ける (うける)", meaning: "Nhận", sentence: "賞を受ける。" }
         ]
      }
   },
   {
      kanji: "周",
      meaning: "Chu vi, xung quanh",
      onYomi: "シュウ",
      kunYomi: "まわり",
      similar: "週, 調, 固",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "周囲 (しゅうい)", meaning: "Xung quanh", sentence: "周囲を見渡す。" }
         ],
         kunYomi: [
            { word: "周り (まわり)", meaning: "Xung quanh", sentence: "家の周りを歩く。" }
         ]
      }
   },
   {
      kanji: "妻",
      meaning: "Vợ",
      onYomi: "サイ",
      kunYomi: "つま",
      similar: "凄, 要",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "夫妻 (ふさい)", meaning: "Vợ chồng", sentence: "夫妻で旅行する。" }
         ],
         kunYomi: [
            { word: "妻 (つま)", meaning: "Vợ", sentence: "彼女は私の妻です。" }
         ]
      }
   },
   {
      kanji: "参",
      meaning: "Tham gia",
      onYomi: "サン",
      kunYomi: "まいる",
      similar: "修, 惨",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "参加 (さんか)", meaning: "Tham gia", sentence: "会議に参加する。" }
         ],
         kunYomi: [
            { word: "参る (まいる)", meaning: "Đi, tham dự (khiêm nhường)", sentence: "神社に参る。" }
         ]
      }
   },
   {
      kanji: "枝",
      meaning: "Cành cây",
      onYomi: "シ",
      kunYomi: "えだ",
      similar: "板, 枚, 杯, 牧",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "枝葉 (しよう)", meaning: "Cành lá", sentence: "枝葉が茂る。" }
         ],
         kunYomi: [
            { word: "枝 (えだ)", meaning: "Cành cây", sentence: "枝を切る。" }
         ]
      }
   },
   {
      kanji: "刷",
      meaning: "In ấn",
      onYomi: "サツ",
      kunYomi: "する",
      similar: "",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "印刷 (いんさつ)", meaning: "In ấn", sentence: "本を印刷する。" }
         ],
         kunYomi: [
            { word: "刷る (する)", meaning: "In", sentence: "新聞を刷る。" }
         ]
      }
   },
   {
      kanji: "効",
      meaning: "Hiệu quả",
      onYomi: "コウ",
      kunYomi: "きく",
      similar: "交",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "効果 (こうか)", meaning: "Hiệu quả", sentence: "薬の効果が現れる。" },
            { word: "効率 (こうりつ)", meaning: "Hiệu suất", sentence: "効率よく仕事をする。" }
         ],
         kunYomi: [
            { word: "効く (きく)", meaning: "Có tác dụng", sentence: "この薬はよく効く。" }
         ]
      }
   },
   {
      kanji: "幸",
      meaning: "Hạnh phúc",
      onYomi: "コウ",
      kunYomi: "さいわい, しあわせ",
      similar: "辛",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "幸福 (こうふく)", meaning: "Hạnh phúc", sentence: "幸福な人生を送る。" }
         ],
         kunYomi: [
            { word: "幸い (さいわい)", meaning: "May mắn", sentence: "幸い事故はなかった。" },
            { word: "幸せ (しあわせ)", meaning: "Hạnh phúc", sentence: "家族と過ごす時間が幸せだ。" }
         ]
      }
   },
   {
      kanji: "固",
      meaning: "Cứng, kiên cố",
      onYomi: "コ",
      kunYomi: "かたい, かためる, かたまる",
      similar: "個, 箇, 涸, 周",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "固定 (こてい)", meaning: "Cố định", sentence: "棚を壁に固定する。" }
         ],
         kunYomi: [
            { word: "固い (かたい)", meaning: "Cứng", sentence: "氷は固い。" },
            { word: "固める (かためる)", meaning: "Làm cứng", sentence: "セメントで地面を固める。" }
         ]
      }
   },
   {
      kanji: "季",
      meaning: "Mùa",
      onYomi: "キ",
      kunYomi: "",
      similar: "茅, 柔",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "季節 (きせつ)", meaning: "Mùa", sentence: "日本には四季がある。" },
            { word: "四季 (しき)", meaning: "Bốn mùa", sentence: "四季折々の風景を楽しむ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "岸",
      meaning: "Bờ, bờ biển",
      onYomi: "ガン",
      kunYomi: "きし",
      similar: "岩, 炭",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "海岸 (かいがん)", meaning: "Bờ biển", sentence: "海岸を散歩する。" }
         ],
         kunYomi: [
            { word: "岸 (きし)", meaning: "Bờ", sentence: "川の岸に立つ。" }
         ]
      }
   },
   {
      kanji: "岩",
      meaning: "Đá, tảng đá",
      onYomi: "ガン",
      kunYomi: "いわ",
      similar: "岸, 炭",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "岩石 (がんせき)", meaning: "Đá, khoáng thạch", sentence: "岩石を研究する。" }
         ],
         kunYomi: [
            { word: "岩 (いわ)", meaning: "Tảng đá", sentence: "岩に座る。" }
         ]
      }
   },
   {
      kanji: "泣",
      meaning: "Khóc",
      onYomi: "キュウ",
      kunYomi: "なく",
      similar: "位, 立",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "号泣 (ごうきゅう)", meaning: "Khóc lớn", sentence: "彼は号泣した。" }
         ],
         kunYomi: [
            { word: "泣く (なく)", meaning: "Khóc", sentence: "子供が泣いている。" }
         ]
      }
   },
   {
      kanji: "協",
      meaning: "Hiệp lực, hợp tác",
      onYomi: "キョウ",
      kunYomi: "",
      similar: "脇",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "協力 (きょうりょく)", meaning: "Hợp tác", sentence: "協力して問題を解決する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "居",
      meaning: "Ở, cư trú",
      onYomi: "キョ",
      kunYomi: "いる",
      similar: "届",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "居住 (きょじゅう)", meaning: "Cư trú", sentence: "この地域に居住する。" }
         ],
         kunYomi: [
            { word: "居る (いる)", meaning: "Ở, tồn tại", sentence: "部屋に人が居る。" }
         ]
      }
   },
   {
      kanji: "苦",
      meaning: "Khổ, khó khăn",
      onYomi: "ク",
      kunYomi: "くるしい, くるしむ, くるしめる, にがい, にがる",
      similar: "草, 古, 早",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "苦労 (くろう)", meaning: "Gian khổ", sentence: "苦労して成功する。" }
         ],
         kunYomi: [
            { word: "苦しい (くるしい)", meaning: "Khó khăn, đau khổ", sentence: "呼吸が苦しい。" },
            { word: "苦い (にがい)", meaning: "Đắng", sentence: "薬が苦い。" }
         ]
      }
   },
   {
      kanji: "具",
      meaning: "Dụng cụ, đồ dùng",
      onYomi: "グ",
      kunYomi: "",
      similar: "真",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "家具 (かぐ)", meaning: "Đồ nội thất", sentence: "家具を買う。" },
            { word: "道具 (どうぐ)", meaning: "Dụng cụ", sentence: "道具を使う。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "果",
      meaning: "Kết quả, quả",
      onYomi: "カ",
      kunYomi: "はたす, はてる, はて",
      similar: "菓, 巣, 単, 課",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "結果 (けっか)", meaning: "Kết quả", sentence: "試験の結果を発表する。" }
         ],
         kunYomi: [
            { word: "果たす (はたす)", meaning: "Hoàn thành", sentence: "役割を果たす。" },
            { word: "果てる (はてる)", meaning: "Kết thúc", sentence: "命が果てる。" }
         ]
      }
   },
   {
      kanji: "河",
      meaning: "Sông",
      onYomi: "カ",
      kunYomi: "かわ",
      similar: "荷, 何, 可, 珂, 苛",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "河川 (かせん)", meaning: "Sông ngòi", sentence: "河川が氾濫する。" }
         ],
         kunYomi: [
            { word: "河 (かわ)", meaning: "Sông", sentence: "大きな河を渡る。" }
         ]
      }
   },
   {
      kanji: "官",
      meaning: "Quan chức, cơ quan",
      onYomi: "カン",
      kunYomi: "",
      similar: "管, 菅, 追, 館",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "官庁 (かんちょう)", meaning: "Cơ quan nhà nước", sentence: "官庁で働く。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "委",
      meaning: "Ủy thác",
      onYomi: "イ",
      kunYomi: "ゆだねる",
      similar: "案, 姿, 資, 条",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "委員 (いいん)", meaning: "Ủy viên", sentence: "委員に選ばれる。" }
         ],
         kunYomi: [
            { word: "委ねる (ゆだねる)", meaning: "Ủy thác", sentence: "仕事を委ねる。" }
         ]
      }
   },
   {
      kanji: "易",
      meaning: "Dễ dàng, trao đổi",
      onYomi: "エキ, イ",
      kunYomi: "やさしい",
      similar: "湯, 場, 陽, 傷, 楊, 揚, 憂, 優",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "容易 (ようい)", meaning: "Dễ dàng", sentence: "容易に解決できる。" }
         ],
         kunYomi: [
            { word: "易しい (やさしい)", meaning: "Dễ dàng", sentence: "問題は易しい。" }
         ]
      }
   },
   {
      kanji: "育",
      meaning: "Nuôi dưỡng, giáo dục",
      onYomi: "イク",
      kunYomi: "そだつ, そだてる",
      similar: "",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "教育 (きょういく)", meaning: "Giáo dục", sentence: "教育を受ける。" }
         ],
         kunYomi: [
            { word: "育つ (そだつ)", meaning: "Lớn lên", sentence: "子供が育つ。" }
         ]
      }
   },
   {
      kanji: "泳",
      meaning: "Bơi",
      onYomi: "エイ",
      kunYomi: "およぐ",
      similar: "永, 水, 詠",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "水泳 (すいえい)", meaning: "Bơi lội", sentence: "水泳大会に出る。" }
         ],
         kunYomi: [
            { word: "泳ぐ (およぐ)", meaning: "Bơi", sentence: "川で泳ぐ。" }
         ]
      }
   },
   {
      kanji: "直",
      meaning: "Trực tiếp, sửa chữa",
      onYomi: "チョク, ジキ",
      kunYomi: "なおす, なおる, ただちに",
      similar: "値, 植, 置, 倶, 県, 眞, 署, 買",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "直接 (ちょくせつ)", meaning: "Trực tiếp", sentence: "直接会って話す。" }
         ],
         kunYomi: [
            { word: "直す (なおす)", meaning: "Sửa chữa", sentence: "時計を直す。" }
         ]
      }
   },
   {
      kanji: "定",
      meaning: "Quy định, xác định",
      onYomi: "テイ, ジョウ",
      kunYomi: "さだめる, さだまる",
      similar: "疋, 正",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "予定 (よてい)", meaning: "Dự định", sentence: "旅行の予定を立てる。" }
         ],
         kunYomi: [
            { word: "定める (さだめる)", meaning: "Quy định", sentence: "法律を定める。" }
         ]
      }
   },
   {
      kanji: "底",
      meaning: "Đáy",
      onYomi: "テイ",
      kunYomi: "そこ",
      similar: "延, 廷, 邸, 抵, 庭, 低",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "海底 (かいてい)", meaning: "Đáy biển", sentence: "海底を探検する。" }
         ],
         kunYomi: [
            { word: "底 (そこ)", meaning: "Đáy", sentence: "箱の底にある。" }
         ]
      }
   },
   {
      kanji: "的",
      meaning: "Mục tiêu, tính chất",
      onYomi: "テキ",
      kunYomi: "まと",
      similar: "",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "目的 (もくてき)", meaning: "Mục đích", sentence: "目的を達成する。" }
         ],
         kunYomi: [
            { word: "的 (まと)", meaning: "Mục tiêu", sentence: "的を射る。" }
         ]
      }
   },
   {
      kanji: "性",
      meaning: "Tính chất, giới tính",
      onYomi: "セイ, ショウ",
      kunYomi: "",
      similar: "牲, 姓, 生",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "性格 (せいかく)", meaning: "Tính cách", sentence: "性格が明るい。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "昔",
      meaning: "Ngày xưa",
      onYomi: "セキ, シャク",
      kunYomi: "むかし",
      similar: "借, 措, 貸, 貨",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "昔話 (むかしばなし)", meaning: "Truyện cổ tích", sentence: "昔話を読む。" }
         ],
         kunYomi: [
            { word: "昔 (むかし)", meaning: "Ngày xưa", sentence: "昔の友人に会う。" }
         ]
      }
   },
   {
      kanji: "制",
      meaning: "Chế độ, kiểm soát",
      onYomi: "セイ",
      kunYomi: "",
      similar: "製",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "制度 (せいど)", meaning: "Chế độ", sentence: "教育制度を改革する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "卒",
      meaning: "Tốt nghiệp",
      onYomi: "ソツ",
      kunYomi: "",
      similar: "來, 来, 傘, 座, 率",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "卒業 (そつぎょう)", meaning: "Tốt nghiệp", sentence: "大学を卒業する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "非",
      meaning: "Sai, không phải, phi-",
      onYomi: "ヒ",
      kunYomi: "",
      similar: "悲, 罪",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "非常 (ひじょう)", meaning: "Khẩn cấp, bất thường", sentence: "非常ベルが鳴った。" },
            { word: "否定 (ひてい)", meaning: "Phủ định", sentence: "彼の意見を否定する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "波",
      meaning: "Sóng",
      onYomi: "ハ",
      kunYomi: "なみ",
      similar: "疲, 彼, 皮, 被",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "波動 (はどう)", meaning: "Sóng động", sentence: "音は空気の波動だ。" },
            { word: "電波 (でんぱ)", meaning: "Sóng điện", sentence: "電波が弱い。" }
         ],
         kunYomi: [
            { word: "波 (なみ)", meaning: "Sóng", sentence: "海に波が立つ。" }
         ]
      }
   },
   {
      kanji: "板",
      meaning: "Tấm ván",
      onYomi: "ハン, バン",
      kunYomi: "いた",
      similar: "枝, 枚, 杯, 牧",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "板前 (いたまえ)", meaning: "Đầu bếp Nhật", sentence: "板前が寿司を作る。" }
         ],
         kunYomi: [
            { word: "板 (いた)", meaning: "Tấm ván", sentence: "板で机を作る。" }
         ]
      }
   },
   {
      kanji: "版",
      meaning: "Bản in, phiên bản",
      onYomi: "ハン",
      kunYomi: "",
      similar: "片",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "出版 (しゅっぱん)", meaning: "Xuất bản", sentence: "本を出版する。" },
            { word: "版画 (はんが)", meaning: "Tranh khắc", sentence: "版画を鑑賞する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "念",
      meaning: "Niệm, ý nghĩ",
      onYomi: "ネン",
      kunYomi: "",
      similar: "含, 今",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "記念 (きねん)", meaning: "Kỷ niệm", sentence: "卒業を記念する。" },
            { word: "念願 (ねんがん)", meaning: "Nguyện vọng", sentence: "念願が叶う。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "武",
      meaning: "Vũ khí, quân sự",
      onYomi: "ブ, ム",
      kunYomi: "",
      similar: "式",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "武士 (ぶし)", meaning: "Samurai", sentence: "武士の精神を学ぶ。" },
            { word: "武力 (ぶりょく)", meaning: "Vũ lực", sentence: "武力で制圧する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "表",
      meaning: "Biểu hiện, mặt ngoài",
      onYomi: "ヒョウ",
      kunYomi: "おもて, あらわす",
      similar: "俵, 依, 衣, 麦, 素",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "表現 (ひょうげん)", meaning: "Biểu hiện", sentence: "感情を表現する。" }
         ],
         kunYomi: [
            { word: "表 (おもて)", meaning: "Mặt ngoài", sentence: "表に名前を書く。" }
         ]
      }
   },
   {
      kanji: "命",
      meaning: "Mệnh lệnh, sinh mạng",
      onYomi: "メイ, ミョウ",
      kunYomi: "いのち",
      similar: "令",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "生命 (せいめい)", meaning: "Sinh mạng", sentence: "生命を守る。" }
         ],
         kunYomi: [
            { word: "命 (いのち)", meaning: "Sinh mạng", sentence: "命を大切にする。" }
         ]
      }
   },
   {
      kanji: "府",
      meaning: "Phủ, cơ quan",
      onYomi: "フ",
      kunYomi: "",
      similar: "",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "政府 (せいふ)", meaning: "Chính phủ", sentence: "政府の政策。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "放",
      meaning: "Phóng, thả",
      onYomi: "ホウ",
      kunYomi: "はなす, はなつ",
      similar: "旋, 族, 遊, 施, 旅, 倣",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "放送 (ほうそう)", meaning: "Phát sóng", sentence: "テレビで放送する。" }
         ],
         kunYomi: [
            { word: "放す (はなす)", meaning: "Thả ra", sentence: "鳥を放す。" }
         ]
      }
   },
   {
      kanji: "法",
      meaning: "Pháp luật",
      onYomi: "ホウ",
      kunYomi: "のり",
      similar: "去",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "法律 (ほうりつ)", meaning: "Luật pháp", sentence: "法律を守る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "油",
      meaning: "Dầu",
      onYomi: "ユ, ユウ",
      kunYomi: "あぶら",
      similar: "田, 由, 甲, 申",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "石油 (せきゆ)", meaning: "Dầu mỏ", sentence: "石油を輸入する。" }
         ],
         kunYomi: [
            { word: "油 (あぶら)", meaning: "Dầu ăn", sentence: "油で揚げる。" }
         ]
      }
   },
   {
      kanji: "勇",
      meaning: "Dũng cảm",
      onYomi: "ユウ",
      kunYomi: "いさむ",
      similar: "男",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "勇気 (ゆうき)", meaning: "Dũng khí", sentence: "勇気を出す。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "要",
      meaning: "Yếu tố, cần thiết",
      onYomi: "ヨウ",
      kunYomi: "いる, かなめ",
      similar: "妻, 凄",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "必要 (ひつよう)", meaning: "Cần thiết", sentence: "水は必要だ。" }
         ],
         kunYomi: [
            { word: "要る (いる)", meaning: "Cần", sentence: "時間が要る。" }
         ]
      }
   },
   {
      kanji: "負",
      meaning: "Mang, thua",
      onYomi: "フ",
      kunYomi: "まける, おう",
      similar: "",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "負担 (ふたん)", meaning: "Gánh nặng", sentence: "責任を負担する。" }
         ],
         kunYomi: [
            { word: "負ける (まける)", meaning: "Thua", sentence: "試合に負ける。" }
         ]
      }
   },
   {
      kanji: "迷",
      meaning: "Lạc đường, mê hoặc",
      onYomi: "メイ",
      kunYomi: "まよう",
      similar: "送, 述, 辻",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "迷惑 (めいわく)", meaning: "Phiền toái", sentence: "迷惑をかける。" }
         ],
         kunYomi: [
            { word: "迷う (まよう)", meaning: "Lạc đường", sentence: "道に迷う。" }
         ]
      }
   },
   {
      kanji: "約",
      meaning: "Ước lượng, hứa hẹn",
      onYomi: "ヤク",
      kunYomi: "",
      similar: "",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "約束 (やくそく)", meaning: "Lời hứa", sentence: "約束を守る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "面",
      meaning: "Mặt, diện",
      onYomi: "メン",
      kunYomi: "おも, おもて, つら",
      similar: "画, 而",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "面接 (めんせつ)", meaning: "Phỏng vấn", sentence: "会社の面接を受ける。" },
            { word: "方面 (ほうめん)", meaning: "Phương diện, khu vực", sentence: "東京方面へ行く。" }
         ],
         kunYomi: [
            { word: "面 (おも)", meaning: "Mặt, bề mặt", sentence: "面を合わせる。" },
            { word: "面 (つら)", meaning: "Khuôn mặt", sentence: "面を上げる。" }
         ]
      }
   },
   {
      kanji: "変",
      meaning: "Thay đổi, kỳ lạ",
      onYomi: "ヘン",
      kunYomi: "かわる, かえる",
      similar: "赤, 恋",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "変化 (へんか)", meaning: "Biến đổi", sentence: "気候が変化する。" },
            { word: "異変 (いへん)", meaning: "Biến cố", sentence: "町に異変が起きた。" }
         ],
         kunYomi: [
            { word: "変わる (かわる)", meaning: "Thay đổi", sentence: "時代が変わる。" },
            { word: "変える (かえる)", meaning: "Làm thay đổi", sentence: "考え方を変える。" }
         ]
      }
   },
   {
      kanji: "飛",
      meaning: "Bay",
      onYomi: "ヒ",
      kunYomi: "とぶ, とばす",
      similar: "",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "飛行機 (ひこうき)", meaning: "Máy bay", sentence: "飛行機で旅行する。" }
         ],
         kunYomi: [
            { word: "飛ぶ (とぶ)", meaning: "Bay", sentence: "鳥が空を飛ぶ。" }
         ]
      }
   },
   {
      kanji: "美",
      meaning: "Đẹp",
      onYomi: "ビ",
      kunYomi: "うつくしい",
      similar: "実, 羊, 姜, 業",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "美術 (びじゅつ)", meaning: "Mỹ thuật", sentence: "美術館を訪れる。" }
         ],
         kunYomi: [
            { word: "美しい (うつくしい)", meaning: "Đẹp", sentence: "美しい花を見る。" }
         ]
      }
   },
   {
      kanji: "独",
      meaning: "Độc lập, một mình",
      onYomi: "ドク",
      kunYomi: "ひとり",
      similar: "虫, 風",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "独立 (どくりつ)", meaning: "Độc lập", sentence: "国が独立する。" }
         ],
         kunYomi: [
            { word: "独り (ひとり)", meaning: "Một mình", sentence: "独りで暮らす。" }
         ]
      }
   },
   {
      kanji: "則",
      meaning: "Quy tắc",
      onYomi: "ソク",
      kunYomi: "",
      similar: "測, 規, 貝, 見",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "規則 (きそく)", meaning: "Quy tắc", sentence: "規則を守る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "相",
      meaning: "Tương, cùng nhau",
      onYomi: "ソウ, ショウ",
      kunYomi: "あい",
      similar: "組, 祖",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "相談 (そうだん)", meaning: "Thảo luận", sentence: "友達に相談する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "草",
      meaning: "Cỏ",
      onYomi: "ソウ",
      kunYomi: "くさ",
      similar: "革, 早, 苦, 章",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "草原 (そうげん)", meaning: "Thảo nguyên", sentence: "草原を歩く。" }
         ],
         kunYomi: [
            { word: "草 (くさ)", meaning: "Cỏ", sentence: "草を刈る。" }
         ]
      }
   },
   {
      kanji: "祖",
      meaning: "Tổ tiên",
      onYomi: "ソ",
      kunYomi: "",
      similar: "租, 組, 相",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "祖先 (そせん)", meaning: "Tổ tiên", sentence: "祖先を敬う。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "信",
      meaning: "Tin tưởng",
      onYomi: "シン",
      kunYomi: "",
      similar: "言",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "信頼 (しんらい)", meaning: "Tin cậy", sentence: "友人を信頼する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "政",
      meaning: "Chính trị",
      onYomi: "セイ, ショウ",
      kunYomi: "まつりごと",
      similar: "改",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "政治 (せいじ)", meaning: "Chính trị", sentence: "政治を学ぶ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "星",
      meaning: "Ngôi sao",
      onYomi: "セイ, ショウ",
      kunYomi: "ほし",
      similar: "徨",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "惑星 (わくせい)", meaning: "Hành tinh", sentence: "地球は惑星だ。" }
         ],
         kunYomi: [
            { word: "星 (ほし)", meaning: "Ngôi sao", sentence: "夜空に星が輝く。" }
         ]
      }
   },
   {
      kanji: "点",
      meaning: "Điểm",
      onYomi: "テン",
      kunYomi: "",
      similar: "占, 苫",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "点数 (てんすう)", meaning: "Điểm số", sentence: "試験の点数が高い。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "追",
      meaning: "Truy đuổi",
      onYomi: "ツイ",
      kunYomi: "おう",
      similar: "官, 管, 退, 迫",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "追求 (ついきゅう)", meaning: "Theo đuổi", sentence: "夢を追求する。" }
         ],
         kunYomi: [
            { word: "追う (おう)", meaning: "Đuổi theo", sentence: "車を追う。" }
         ]
      }
   },
   {
      kanji: "単",
      meaning: "Đơn giản",
      onYomi: "タン",
      kunYomi: "",
      similar: "果, 菓, 課, 巣",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "単語 (たんご)", meaning: "Từ vựng", sentence: "英単語を覚える。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "炭",
      meaning: "Than",
      onYomi: "タン",
      kunYomi: "すみ",
      similar: "灰, 岩, 岸",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "石炭 (せきたん)", meaning: "Than đá", sentence: "石炭を燃やす。" }
         ],
         kunYomi: [
            { word: "炭 (すみ)", meaning: "Than", sentence: "炭で火を起こす。" }
         ]
      }
   },
   {
      kanji: "退",
      meaning: "Rút lui, nghỉ",
      onYomi: "タイ",
      kunYomi: "しりぞく, しりぞける",
      similar: "追",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "退職 (たいしょく)", meaning: "Nghỉ việc", sentence: "会社を退職する。" }
         ],
         kunYomi: [
            { word: "退く (しりぞく)", meaning: "Rút lui", sentence: "前線から退く。" }
         ]
      }
   },
   {
      kanji: "栄",
      meaning: "Vinh quang",
      onYomi: "エイ",
      kunYomi: "さかえる, はえ, はえる",
      similar: "",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "栄光 (えいこう)", meaning: "Vinh quang", sentence: "栄光を勝ち取る。" }
         ],
         kunYomi: [
            { word: "栄える (さかえる)", meaning: "Phồn vinh", sentence: "町が栄える。" }
         ]
      }
   },
   {
      kanji: "科",
      meaning: "Khoa, môn học",
      onYomi: "カ",
      kunYomi: "",
      similar: "料, 秋, 称",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "科学 (かがく)", meaning: "Khoa học", sentence: "科学を研究する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "活",
      meaning: "Hoạt động",
      onYomi: "カツ",
      kunYomi: "",
      similar: "括",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "生活 (せいかつ)", meaning: "Cuộc sống", sentence: "生活を楽しむ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "胃",
      meaning: "Dạ dày",
      onYomi: "イ",
      kunYomi: "",
      similar: "冒, 買",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "胃腸 (いちょう)", meaning: "Dạ dày và ruột", sentence: "胃腸の調子が悪い。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "級",
      meaning: "Cấp bậc",
      onYomi: "キュウ",
      kunYomi: "",
      similar: "吸, 汲, 扱",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "上級 (じょうきゅう)", meaning: "Thượng cấp", sentence: "上級クラスに進む。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "軍",
      meaning: "Quân đội",
      onYomi: "グン",
      kunYomi: "",
      similar: "運, 庫, 車, 揮, 渾",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "軍隊 (ぐんたい)", meaning: "Quân đội", sentence: "軍隊に所属する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "係",
      meaning: "Liên hệ, phụ trách",
      onYomi: "ケイ",
      kunYomi: "かかり",
      similar: "糸",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "関係 (かんけい)", meaning: "Quan hệ", sentence: "両国の関係が良い。" }
         ],
         kunYomi: [
            { word: "係 (かかり)", meaning: "Người phụ trách", sentence: "係の人に聞く。" }
         ]
      }
   },
   {
      kanji: "型",
      meaning: "Khuôn mẫu, kiểu",
      onYomi: "ケイ",
      kunYomi: "かた",
      similar: "",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "模型 (もけい)", meaning: "Mô hình", sentence: "模型を作る。" }
         ],
         kunYomi: [
            { word: "型 (かた)", meaning: "Khuôn mẫu", sentence: "型に入れる。" }
         ]
      }
   },
   {
      kanji: "客",
      meaning: "Khách",
      onYomi: "キャク, カク",
      kunYomi: "",
      similar: "各, 挌, 格",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "客室 (きゃくしつ)", meaning: "Phòng khách", sentence: "客室に案内する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "逆",
      meaning: "Ngược lại",
      onYomi: "ギャク",
      kunYomi: "さか, さからう",
      similar: "送",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "逆転 (ぎゃくてん)", meaning: "Đảo ngược", sentence: "試合が逆転した。" }
         ],
         kunYomi: [
            { word: "逆らう (さからう)", meaning: "Chống đối", sentence: "命令に逆らう。" }
         ]
      }
   },
   {
      kanji: "限",
      meaning: "Giới hạn",
      onYomi: "ゲン",
      kunYomi: "かぎる",
      similar: "",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "期限 (きげん)", meaning: "Thời hạn", sentence: "提出期限を守る。" }
         ],
         kunYomi: [
            { word: "限る (かぎる)", meaning: "Giới hạn", sentence: "人数を限る。" }
         ]
      }
   },
   {
      kanji: "厚",
      meaning: "Dày, sâu đậm",
      onYomi: "コウ",
      kunYomi: "あつい",
      similar: "",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "厚意 (こうい)", meaning: "Ân tình", sentence: "厚意に感謝する。" }
         ],
         kunYomi: [
            { word: "厚い (あつい)", meaning: "Dày", sentence: "本が厚い。" }
         ]
      }
   },
   {
      kanji: "指",
      meaning: "Ngón tay, chỉ",
      onYomi: "シ",
      kunYomi: "ゆび, さす",
      similar: "階, 陛, 態, 能",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "指示 (しじ)", meaning: "Chỉ thị", sentence: "先生の指示に従う。" }
         ],
         kunYomi: [
            { word: "指 (ゆび)", meaning: "Ngón tay", sentence: "指を切った。" }
         ]
      }
   },
   {
      kanji: "昨",
      meaning: "Hôm qua",
      onYomi: "サク",
      kunYomi: "",
      similar: "作, 咋, 詐, 乍",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "昨日 (さくじつ)", meaning: "Hôm qua", sentence: "昨日は雨だった。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "祝",
      meaning: "Chúc mừng",
      onYomi: "シュク, シュウ",
      kunYomi: "いわう",
      similar: "兄, 党, 悦, 況, 税, 脱, 覚, 説",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "祝日 (しゅくじつ)", meaning: "Ngày lễ", sentence: "祝日に休む。" },
            { word: "祝福 (しゅくふく)", meaning: "Chúc phúc", sentence: "結婚を祝福する。" }
         ],
         kunYomi: [
            { word: "祝う (いわう)", meaning: "Chúc mừng", sentence: "誕生日を祝う。" }
         ]
      }
   },
   {
      kanji: "神",
      meaning: "Thần, thần linh",
      onYomi: "シン, ジン",
      kunYomi: "かみ",
      similar: "袖, 押, 伸",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "神社 (じんじゃ)", meaning: "Đền thờ Thần đạo", sentence: "神社に参拝する。" },
            { word: "神話 (しんわ)", meaning: "Thần thoại", sentence: "ギリシャ神話を読む。" }
         ],
         kunYomi: [
            { word: "神 (かみ)", meaning: "Thần", sentence: "神を信じる。" }
         ]
      }
   },
   {
      kanji: "査",
      meaning: "Điều tra, kiểm tra",
      onYomi: "サ",
      kunYomi: "",
      similar: "杳",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "調査 (ちょうさ)", meaning: "Điều tra", sentence: "事故の原因を調査する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "省",
      meaning: "Bộ, tiết kiệm, xem xét",
      onYomi: "ショウ, セイ",
      kunYomi: "はぶく, かえりみる",
      similar: "",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "省庁 (しょうちょう)", meaning: "Bộ ngành", sentence: "省庁で働く。" }
         ],
         kunYomi: [
            { word: "省みる (かえりみる)", meaning: "Xem xét lại", sentence: "過去を省みる。" }
         ]
      }
   },
   {
      kanji: "酒",
      meaning: "Rượu",
      onYomi: "シュ",
      kunYomi: "さけ, さか",
      similar: "配",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "酒屋 (さかや)", meaning: "Tiệm rượu", sentence: "酒屋で酒を買う。" }
         ],
         kunYomi: [
            { word: "酒 (さけ)", meaning: "Rượu", sentence: "酒を飲む。" }
         ]
      }
   },
   {
      kanji: "笑",
      meaning: "Cười",
      onYomi: "ショウ",
      kunYomi: "わらう, えむ",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "笑顔 (えがお)", meaning: "Khuôn mặt cười", sentence: "笑顔が素敵だ。" }
         ],
         kunYomi: [
            { word: "笑う (わらう)", meaning: "Cười", sentence: "冗談に笑う。" }
         ]
      }
   },
   {
      kanji: "消",
      meaning: "Xóa bỏ, tiêu diệt",
      onYomi: "ショウ",
      kunYomi: "けす, きえる",
      similar: "削",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "消費 (しょうひ)", meaning: "Tiêu thụ", sentence: "電力を消費する。" }
         ],
         kunYomi: [
            { word: "消す (けす)", meaning: "Xóa, tắt", sentence: "電気を消す。" }
         ]
      }
   },
   {
      kanji: "師",
      meaning: "Thầy, sư",
      onYomi: "シ",
      kunYomi: "",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "教師 (きょうし)", meaning: "Giáo viên", sentence: "教師に質問する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "財",
      meaning: "Tài sản",
      onYomi: "ザイ, サイ",
      kunYomi: "",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "財産 (ざいさん)", meaning: "Tài sản", sentence: "財産を守る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "殺",
      meaning: "Giết",
      onYomi: "サツ",
      kunYomi: "ころす",
      similar: "役, 投",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "殺人 (さつじん)", meaning: "Giết người", sentence: "殺人事件が起きた。" }
         ],
         kunYomi: [
            { word: "殺す (ころす)", meaning: "Giết", sentence: "虫を殺す。" }
         ]
      }
   },
   {
      kanji: "差",
      meaning: "Khác biệt",
      onYomi: "サ",
      kunYomi: "さす",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "差別 (さべつ)", meaning: "Phân biệt", sentence: "差別をなくす。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "残",
      meaning: "Còn lại",
      onYomi: "ザン",
      kunYomi: "のこる, のこす",
      similar: "浅, 桟, 銭",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "残念 (ざんねん)", meaning: "Đáng tiếc", sentence: "試験に落ちて残念だ。" }
         ],
         kunYomi: [
            { word: "残る (のこる)", meaning: "Còn lại", sentence: "食べ物が残る。" }
         ]
      }
   },
   {
      kanji: "航",
      meaning: "Hàng hải",
      onYomi: "コウ",
      kunYomi: "",
      similar: "船, 般, 舟",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "航空 (こうくう)", meaning: "Hàng không", sentence: "航空会社に勤める。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "根",
      meaning: "Rễ",
      onYomi: "コン",
      kunYomi: "ね",
      similar: "狼",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "根本 (こんぽん)", meaning: "Căn bản", sentence: "問題の根本を探る。" }
         ],
         kunYomi: [
            { word: "根 (ね)", meaning: "Rễ", sentence: "木の根が深い。" }
         ]
      }
   },
   {
      kanji: "個",
      meaning: "Cái, cá nhân",
      onYomi: "コ",
      kunYomi: "",
      similar: "固, 箇, 涸",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "個人 (こじん)", meaning: "Cá nhân", sentence: "個人情報を守る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "候",
      meaning: "Khí hậu, mùa",
      onYomi: "コウ",
      kunYomi: "",
      similar: "侯, 挨",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "気候 (きこう)", meaning: "Khí hậu", sentence: "日本の気候は温暖だ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "庫",
      meaning: "Kho",
      onYomi: "コ",
      kunYomi: "",
      similar: "渾, 揮, 運, 車, 軍",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "倉庫 (そうこ)", meaning: "Nhà kho", sentence: "倉庫に荷物を置く。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "記",
      meaning: "Ghi chép",
      onYomi: "キ",
      kunYomi: "しるす",
      similar: "庭",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "記事 (きじ)", meaning: "Bài báo", sentence: "新聞の記事を読む。" }
         ],
         kunYomi: [
            { word: "記す (しるす)", meaning: "Ghi lại", sentence: "名前を記す。" }
         ]
      }
   },
   {
      kanji: "訓",
      meaning: "Huấn luyện, cách đọc",
      onYomi: "クン",
      kunYomi: "",
      similar: "討, 訃, 訂",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "訓練 (くんれん)", meaning: "Huấn luyện", sentence: "兵士を訓練する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "害",
      meaning: "Hại",
      onYomi: "ガイ",
      kunYomi: "",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "害虫 (がいちゅう)", meaning: "Côn trùng gây hại", sentence: "害虫を駆除する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "格",
      meaning: "Địa vị, hạng",
      onYomi: "カク",
      kunYomi: "",
      similar: "挌, 客, 各",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "資格 (しかく)", meaning: "Bằng cấp", sentence: "資格を取得する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "荷",
      meaning: "Hành lý",
      onYomi: "カ",
      kunYomi: "に",
      similar: "苛, 何, 河, 珂, 可",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "荷物 (にもつ)", meaning: "Hành lý", sentence: "荷物を運ぶ。" }
         ],
         kunYomi: [
            { word: "荷 (に)", meaning: "Hành lý", sentence: "荷を背負う。" }
         ]
      }
   },
   {
      kanji: "帯",
      meaning: "Dải, thắt lưng",
      onYomi: "タイ",
      kunYomi: "おび",
      similar: "滞",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "地帯 (ちたい)", meaning: "Vùng, khu vực", sentence: "熱帯地方に住む。" }
         ],
         kunYomi: [
            { word: "帯 (おび)", meaning: "Thắt lưng", sentence: "帯を締める。" }
         ]
      }
   },
   {
      kanji: "島",
      meaning: "Đảo",
      onYomi: "トウ",
      kunYomi: "しま",
      similar: "鳥, 嶋, 烏, 馬, 鳴, 鴬",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "島国 (しまぐに)", meaning: "Quốc đảo", sentence: "日本は島国だ。" }
         ],
         kunYomi: [
            { word: "島 (しま)", meaning: "Đảo", sentence: "島に渡る。" }
         ]
      }
   },
   {
      kanji: "庭",
      meaning: "Vườn",
      onYomi: "テイ",
      kunYomi: "にわ",
      similar: "延, 廷, 邸, 抵, 底, 低",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "庭園 (ていえん)", meaning: "Vườn cảnh", sentence: "庭園を散歩する。" }
         ],
         kunYomi: [
            { word: "庭 (にわ)", meaning: "Vườn", sentence: "庭に花を植える。" }
         ]
      }
   },
   {
      kanji: "徒",
      meaning: "Học trò, đi bộ",
      onYomi: "ト",
      kunYomi: "",
      similar: "走",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "生徒 (せいと)", meaning: "Học sinh", sentence: "生徒が勉強する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "席",
      meaning: "Chỗ ngồi",
      onYomi: "セキ",
      kunYomi: "",
      similar: "度, 渡",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "座席 (ざせき)", meaning: "Chỗ ngồi", sentence: "座席に座る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "息",
      meaning: "Hơi thở, nghỉ ngơi",
      onYomi: "ソク",
      kunYomi: "いき",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "休息 (きゅうそく)", meaning: "Nghỉ ngơi", sentence: "休息を取る。" }
         ],
         kunYomi: [
            { word: "息 (いき)", meaning: "Hơi thở", sentence: "息をする。" }
         ]
      }
   },
   {
      kanji: "造",
      meaning: "Chế tạo",
      onYomi: "ゾウ",
      kunYomi: "つくる",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "製造 (せいぞう)", meaning: "Sản xuất", sentence: "車を製造する。" }
         ],
         kunYomi: [
            { word: "造る (つくる)", meaning: "Chế tạo", sentence: "船を造る。" }
         ]
      }
   },
   {
      kanji: "孫",
      meaning: "Cháu",
      onYomi: "ソン",
      kunYomi: "まご",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "子孫 (しそん)", meaning: "Con cháu", sentence: "子孫を残す。" }
         ],
         kunYomi: [
            { word: "孫 (まご)", meaning: "Cháu", sentence: "孫と遊ぶ。" }
         ]
      }
   },
   {
      kanji: "速",
      meaning: "Nhanh",
      onYomi: "ソク",
      kunYomi: "はやい",
      similar: "遠, 凍, 束, 東",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "速度 (そくど)", meaning: "Tốc độ", sentence: "速度を上げる。" }
         ],
         kunYomi: [
            { word: "速い (はやい)", meaning: "Nhanh", sentence: "走るのが速い。" }
         ]
      }
   },
   {
      kanji: "能",
      meaning: "Khả năng, năng lực",
      onYomi: "ノウ",
      kunYomi: "",
      similar: "態, 指",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "能力 (のうりょく)", meaning: "Năng lực", sentence: "能力を発揮する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "配",
      meaning: "Phân phối",
      onYomi: "ハイ",
      kunYomi: "くばる",
      similar: "酒",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "配達 (はいたつ)", meaning: "Giao hàng", sentence: "新聞を配達する。" }
         ],
         kunYomi: [
            { word: "配る (くばる)", meaning: "Phân phát", sentence: "資料を配る。" }
         ]
      }
   },
   {
      kanji: "倍",
      meaning: "Gấp đôi",
      onYomi: "バイ",
      kunYomi: "",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "倍率 (ばいりつ)", meaning: "Tỷ lệ phóng đại", sentence: "倍率を計算する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "破",
      meaning: "Phá vỡ",
      onYomi: "ハ",
      kunYomi: "やぶる, やぶれる",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "破壊 (はかい)", meaning: "Phá hoại", sentence: "建物を破壊する。" }
         ],
         kunYomi: [
            { word: "破る (やぶる)", meaning: "Xé, phá", sentence: "約束を破る。" }
         ]
      }
   },
   {
      kanji: "馬",
      meaning: "Ngựa",
      onYomi: "バ",
      kunYomi: "うま, ま",
      similar: "篤, 鳥, 島, 嶋, 烏, 鳴, 鴬",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "馬車 (ばしゃ)", meaning: "Xe ngựa", sentence: "馬車に乗る。" }
         ],
         kunYomi: [
            { word: "馬 (うま)", meaning: "Ngựa", sentence: "馬に乗る。" }
         ]
      }
   },
   {
      kanji: "浴",
      meaning: "Tắm",
      onYomi: "ヨク",
      kunYomi: "あびる, あびせる",
      similar: "沿, 谷, 合, 溶, 俗, 塔, 容, 筈, 答",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "浴室 (よくしつ)", meaning: "Phòng tắm", sentence: "浴室でシャワーを浴びる。" }
         ],
         kunYomi: [
            { word: "浴びる (あびる)", meaning: "Tắm, hứng chịu", sentence: "日光を浴びる。" }
         ]
      }
   },
   {
      kanji: "容",
      meaning: "Dung chứa, hình dạng",
      onYomi: "ヨウ",
      kunYomi: "",
      similar: "谷, 溶, 俗, 合, 塔, 沿, 浴, 筈, 答",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "内容 (ないよう)", meaning: "Nội dung", sentence: "内容を確認する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "流",
      meaning: "Dòng chảy",
      onYomi: "リュウ, ル",
      kunYomi: "ながれる, ながす",
      similar: "荒, 慌, 充",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "流行 (りゅうこう)", meaning: "Thịnh hành", sentence: "流行の服を着る。" }
         ],
         kunYomi: [
            { word: "流れる (ながれる)", meaning: "Chảy", sentence: "川が流れる。" }
         ]
      }
   },
   {
      kanji: "留",
      meaning: "Lưu lại",
      onYomi: "リュウ, ル",
      kunYomi: "とめる, とまる",
      similar: "瑠, 溜",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "留学 (りゅうがく)", meaning: "Du học", sentence: "アメリカに留学する。" }
         ],
         kunYomi: [
            { word: "留める (とめる)", meaning: "Giữ lại", sentence: "紙をピンで留める。" }
         ]
      }
   },
   {
      kanji: "連",
      meaning: "Liên kết",
      onYomi: "レン",
      kunYomi: "つれる, つらなる",
      similar: "運",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "連絡 (れんらく)", meaning: "Liên lạc", sentence: "友達に連絡する。" }
         ],
         kunYomi: [
            { word: "連れる (つれる)", meaning: "Dẫn theo", sentence: "子供を連れる。" }
         ]
      }
   },
   {
      kanji: "陸",
      meaning: "Đất liền",
      onYomi: "リク",
      kunYomi: "",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "陸地 (りくち)", meaning: "Đất liền", sentence: "陸地に上がる。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "率",
      meaning: "Tỷ lệ, suất",
      onYomi: "ソツ, リツ",
      kunYomi: "",
      similar: "傘, 座, 卒",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "比率 (ひりつ)", meaning: "Tỷ lệ", sentence: "比率を計算する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "略",
      meaning: "Lược bỏ, giản lược",
      onYomi: "リャク",
      kunYomi: "",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "略語 (りゃくご)", meaning: "Từ viết tắt", sentence: "略語を使う。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "望",
      meaning: "Mong muốn",
      onYomi: "ボウ",
      kunYomi: "のぞむ",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "希望 (きぼう)", meaning: "Hy vọng", sentence: "希望を持つ。" }
         ],
         kunYomi: [
            { word: "望む (のぞむ)", meaning: "Mong muốn", sentence: "成功を望む。" }
         ]
      }
   },
   {
      kanji: "務",
      meaning: "Nhiệm vụ",
      onYomi: "ム",
      kunYomi: "つとめる",
      similar: "",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "義務 (ぎむ)", meaning: "Nghĩa vụ", sentence: "義務を果たす。" }
         ],
         kunYomi: [
            { word: "務める (つとめる)", meaning: "Đảm nhiệm", sentence: "役割を務める。" }
         ]
      }
   },
   {
      kanji: "敗",
      meaning: "Thất bại, thua",
      onYomi: "ハイ",
      kunYomi: "やぶれる",
      similar: "販",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "失敗 (しっぱい)", meaning: "Thất bại", sentence: "計画は失敗に終わった。" },
            { word: "敗北 (はいぼく)", meaning: "Thua trận", sentence: "試合で敗北する。" }
         ],
         kunYomi: [
            { word: "敗れる (やぶれる)", meaning: "Bị thua", sentence: "敵に敗れる。" }
         ]
      }
   },
   {
      kanji: "部",
      meaning: "Bộ phận",
      onYomi: "ブ",
      kunYomi: "",
      similar: "都, 郡, 剖, 郁",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "全部 (ぜんぶ)", meaning: "Toàn bộ", sentence: "全部を確認する。" },
            { word: "部屋 (へや)", meaning: "Phòng", sentence: "部屋に入る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "副",
      meaning: "Phó",
      onYomi: "フク",
      kunYomi: "",
      similar: "幅, 冨, 富, 福, 高",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "副社長 (ふくしゃちょう)", meaning: "Phó giám đốc", sentence: "副社長が会議に出席する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "婦",
      meaning: "Phụ nữ",
      onYomi: "フ",
      kunYomi: "",
      similar: "帰, 掃",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "主婦 (しゅふ)", meaning: "Nội trợ", sentence: "主婦が料理を作る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "側",
      meaning: "Bên cạnh",
      onYomi: "ソク",
      kunYomi: "かわ, がわ",
      similar: "順",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "側面 (そくめん)", meaning: "Mặt bên", sentence: "建物の側面を見る。" }
         ],
         kunYomi: [
            { word: "側 (かわ)", meaning: "Bên cạnh", sentence: "母の側にいる。" }
         ]
      }
   },
   {
      kanji: "組",
      meaning: "Tổ, nhóm",
      onYomi: "ソ",
      kunYomi: "くむ, くみ",
      similar: "粗, 狙, 阻, 相, 祖",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "組織 (そしき)", meaning: "Tổ chức", sentence: "組織を改革する。" }
         ],
         kunYomi: [
            { word: "組む (くむ)", meaning: "Kết hợp", sentence: "手を組む。" }
         ]
      }
   },
   {
      kanji: "責",
      meaning: "Trách nhiệm",
      onYomi: "セキ",
      kunYomi: "せめる",
      similar: "積, 績, 漬",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "責任 (せきにん)", meaning: "Trách nhiệm", sentence: "責任を果たす。" }
         ],
         kunYomi: [
            { word: "責める (せめる)", meaning: "Đổ lỗi", sentence: "人を責める。" }
         ]
      }
   },
   {
      kanji: "接",
      meaning: "Tiếp xúc",
      onYomi: "セツ",
      kunYomi: "つぐ",
      similar: "",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "接触 (せっしょく)", meaning: "Tiếp xúc", sentence: "人と接触する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "船",
      meaning: "Thuyền",
      onYomi: "セン",
      kunYomi: "ふね",
      similar: "航, 般, 舟",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "船員 (せんいん)", meaning: "Thủy thủ", sentence: "船員が働く。" }
         ],
         kunYomi: [
            { word: "船 (ふね)", meaning: "Thuyền", sentence: "船に乗る。" }
         ]
      }
   },
   {
      kanji: "商",
      meaning: "Buôn bán",
      onYomi: "ショウ",
      kunYomi: "",
      similar: "適, 嫡, 摘, 敵, 滴, 鏑",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "商店 (しょうてん)", meaning: "Cửa hàng", sentence: "商店で買い物する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "設",
      meaning: "Thiết lập",
      onYomi: "セツ",
      kunYomi: "もうける",
      similar: "",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "設備 (せつび)", meaning: "Trang thiết bị", sentence: "設備を整える。" }
         ],
         kunYomi: [
            { word: "設ける (もうける)", meaning: "Thiết lập", sentence: "規則を設ける。" }
         ]
      }
   },
   {
      kanji: "雪",
      meaning: "Tuyết",
      onYomi: "セツ",
      kunYomi: "ゆき",
      similar: "需",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "降雪 (こうせつ)", meaning: "Tuyết rơi", sentence: "降雪が続く。" }
         ],
         kunYomi: [
            { word: "雪 (ゆき)", meaning: "Tuyết", sentence: "雪が降る。" }
         ]
      }
   },
   {
      kanji: "清",
      meaning: "Thanh sạch",
      onYomi: "セイ, ショウ",
      kunYomi: "きよい, きよめる",
      similar: "靖, 晴, 青, 請, 精, 情",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "清潔 (せいけつ)", meaning: "Sạch sẽ", sentence: "部屋を清潔に保つ。" }
         ],
         kunYomi: [
            { word: "清い (きよい)", meaning: "Trong sạch", sentence: "心が清い。" }
         ]
      }
   },
   {
      kanji: "深",
      meaning: "Sâu",
      onYomi: "シン",
      kunYomi: "ふかい, ふかめる",
      similar: "探",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "深刻 (しんこく)", meaning: "Nghiêm trọng", sentence: "深刻な問題。" }
         ],
         kunYomi: [
            { word: "深い (ふかい)", meaning: "Sâu", sentence: "川が深い。" }
         ]
      }
   },
   {
      kanji: "得",
      meaning: "Được, lợi ích",
      onYomi: "トク",
      kunYomi: "える, うる",
      similar: "待, 持, 時, 特",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "所得 (しょとく)", meaning: "Thu nhập", sentence: "所得が増える。" }
         ],
         kunYomi: [
            { word: "得る (える)", meaning: "Đạt được", sentence: "知識を得る。" }
         ]
      }
   },
   {
      kanji: "第",
      meaning: "Thứ tự",
      onYomi: "ダイ",
      kunYomi: "",
      similar: "弟, 悌, 等, 剃",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "第一 (だいいち)", meaning: "Thứ nhất", sentence: "第一に安全を考える。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "停",
      meaning: "Dừng lại",
      onYomi: "テイ",
      kunYomi: "とまる, とめる",
      similar: "亭, 亨, 享",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "停車 (ていしゃ)", meaning: "Xe dừng", sentence: "電車が停車する。" },
            { word: "停止 (ていし)", meaning: "Ngừng lại", sentence: "機械が停止した。" }
         ],
         kunYomi: [
            { word: "停める (とめる)", meaning: "Dừng lại", sentence: "車を停める。" }
         ]
      }
   },
   {
      kanji: "断",
      meaning: "Cắt đứt, từ chối",
      onYomi: "ダン",
      kunYomi: "たつ, ことわる",
      similar: "",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "断絶 (だんぜつ)", meaning: "Đoạn tuyệt", sentence: "関係を断絶する。" }
         ],
         kunYomi: [
            { word: "断る (ことわる)", meaning: "Từ chối", sentence: "招待を断る。" }
         ]
      }
   },
   {
      kanji: "貨",
      meaning: "Hàng hóa, tiền tệ",
      onYomi: "カ",
      kunYomi: "",
      similar: "貸, 資, 貧, 貿, 賃, 賛, 借",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "貨物 (かもつ)", meaning: "Hàng hóa", sentence: "貨物列車が走る。" },
            { word: "通貨 (つうか)", meaning: "Tiền tệ", sentence: "通貨を交換する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "液",
      meaning: "Chất lỏng, dịch",
      onYomi: "エキ",
      kunYomi: "",
      similar: "夜",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "血液 (けつえき)", meaning: "Máu", sentence: "血液検査を受ける。" },
            { word: "液体 (えきたい)", meaning: "Chất lỏng", sentence: "液体を容器に入れる。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "移",
      meaning: "Di chuyển",
      onYomi: "イ",
      kunYomi: "うつる, うつす",
      similar: "",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "移動 (いどう)", meaning: "Di chuyển", sentence: "車で移動する。" }
         ],
         kunYomi: [
            { word: "移す (うつす)", meaning: "Chuyển", sentence: "席を移す。" }
         ]
      }
   },
   {
      kanji: "経",
      meaning: "Kinh tế, trải qua",
      onYomi: "ケイ, キョウ",
      kunYomi: "へる",
      similar: "軽, 怪",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "経済 (けいざい)", meaning: "Kinh tế", sentence: "経済を学ぶ。" }
         ],
         kunYomi: [
            { word: "経る (へる)", meaning: "Trải qua", sentence: "年月を経る。" }
         ]
      }
   },
   {
      kanji: "規",
      meaning: "Quy tắc",
      onYomi: "キ",
      kunYomi: "",
      similar: "現, 視, 則, 見, 貝",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "規則 (きそく)", meaning: "Quy tắc", sentence: "規則を守る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "寄",
      meaning: "Ghé, gửi",
      onYomi: "キ",
      kunYomi: "よる, よせる",
      similar: "奇",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "寄付 (きふ)", meaning: "Quyên góp", sentence: "寄付を募る。" }
         ],
         kunYomi: [
            { word: "寄る (よる)", meaning: "Ghé vào", sentence: "駅に寄る。" }
         ]
      }
   },
   {
      kanji: "許",
      meaning: "Cho phép",
      onYomi: "キョ",
      kunYomi: "ゆるす",
      similar: "評",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "許可 (きょか)", meaning: "Cho phép", sentence: "入場を許可する。" }
         ],
         kunYomi: [
            { word: "許す (ゆるす)", meaning: "Tha thứ, cho phép", sentence: "罪を許す。" }
         ]
      }
   },
   {
      kanji: "球",
      meaning: "Quả cầu, bóng",
      onYomi: "キュウ",
      kunYomi: "たま",
      similar: "救, 求",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "地球 (ちきゅう)", meaning: "Trái đất", sentence: "地球は丸い。" }
         ],
         kunYomi: [
            { word: "球 (たま)", meaning: "Quả cầu, bóng", sentence: "球を投げる。" }
         ]
      }
   },
   {
      kanji: "救",
      meaning: "Cứu giúp",
      onYomi: "キュウ",
      kunYomi: "すくう",
      similar: "求, 球",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "救助 (きゅうじょ)", meaning: "Cứu trợ", sentence: "人を救助する。" }
         ],
         kunYomi: [
            { word: "救う (すくう)", meaning: "Cứu giúp", sentence: "命を救う。" }
         ]
      }
   },
   {
      kanji: "険",
      meaning: "Nguy hiểm",
      onYomi: "ケン",
      kunYomi: "けわしい",
      similar: "倹, 検, 験, 剣",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "危険 (きけん)", meaning: "Nguy hiểm", sentence: "危険を避ける。" }
         ],
         kunYomi: [
            { word: "険しい (けわしい)", meaning: "Dốc, hiểm trở", sentence: "険しい山道。" }
         ]
      }
   },
   {
      kanji: "現",
      meaning: "Hiện tại, xuất hiện",
      onYomi: "ゲン",
      kunYomi: "あらわれる, あらわす",
      similar: "規, 視",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "現在 (げんざい)", meaning: "Hiện tại", sentence: "現在の状況。" }
         ],
         kunYomi: [
            { word: "現れる (あらわれる)", meaning: "Xuất hiện", sentence: "姿が現れる。" }
         ]
      }
   },
   {
      kanji: "混",
      meaning: "Hỗn hợp",
      onYomi: "コン",
      kunYomi: "まじる, まざる, まぜる",
      similar: "昆",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "混乱 (こんらん)", meaning: "Hỗn loạn", sentence: "混乱が続く。" }
         ],
         kunYomi: [
            { word: "混ぜる (まぜる)", meaning: "Trộn lẫn", sentence: "砂糖を混ぜる。" }
         ]
      }
   },
   {
      kanji: "祭",
      meaning: "Lễ hội",
      onYomi: "サイ",
      kunYomi: "まつる, まつり",
      similar: "際, 蔡, 察",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "祭日 (さいじつ)", meaning: "Ngày lễ", sentence: "祭日に休む。" }
         ],
         kunYomi: [
            { word: "祭り (まつり)", meaning: "Lễ hội", sentence: "夏祭りに参加する。" }
         ]
      }
   },
   {
      kanji: "細",
      meaning: "Nhỏ, chi tiết",
      onYomi: "サイ",
      kunYomi: "ほそい, こまかい",
      similar: "",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "詳細 (しょうさい)", meaning: "Chi tiết", sentence: "詳細を説明する。" }
         ],
         kunYomi: [
            { word: "細い (ほそい)", meaning: "Mảnh, nhỏ", sentence: "細い糸。" }
         ]
      }
   },
   {
      kanji: "術",
      meaning: "Kỹ thuật, nghệ thuật",
      onYomi: "ジュツ",
      kunYomi: "",
      similar: "",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "技術 (ぎじゅつ)", meaning: "Kỹ thuật", sentence: "技術を学ぶ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "宿",
      meaning: "Trọ, nhà trọ",
      onYomi: "シュク",
      kunYomi: "やど",
      similar: "縮",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "宿題 (しゅくだい)", meaning: "Bài tập về nhà", sentence: "宿題をする。" }
         ],
         kunYomi: [
            { word: "宿 (やど)", meaning: "Nhà trọ", sentence: "宿に泊まる。" }
         ]
      }
   },
   {
      kanji: "章",
      meaning: "Chương, đoạn văn",
      onYomi: "ショウ",
      kunYomi: "",
      similar: "草",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "文章 (ぶんしょう)", meaning: "Văn chương, đoạn văn", sentence: "文章を書く。" },
            { word: "章節 (しょうせつ)", meaning: "Chương mục", sentence: "本の章節を読む。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "常",
      meaning: "Thường xuyên, bình thường",
      onYomi: "ジョウ",
      kunYomi: "つね",
      similar: "営, 堂",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "常識 (じょうしき)", meaning: "Thường thức", sentence: "常識を持って行動する。" },
            { word: "通常 (つうじょう)", meaning: "Thông thường", sentence: "通常の方法で処理する。" }
         ],
         kunYomi: [
            { word: "常に (つねに)", meaning: "Luôn luôn", sentence: "常に努力する。" }
         ]
      }
   },
   {
      kanji: "情",
      meaning: "Tình cảm, cảm xúc",
      onYomi: "ジョウ, セイ",
      kunYomi: "なさけ",
      similar: "靖, 清, 晴, 青, 請, 精",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "感情 (かんじょう)", meaning: "Cảm xúc", sentence: "感情を表す。" },
            { word: "情報 (じょうほう)", meaning: "Thông tin", sentence: "情報を集める。" }
         ],
         kunYomi: [
            { word: "情け (なさけ)", meaning: "Lòng trắc ẩn", sentence: "情けをかける。" }
         ]
      }
   },
   {
      kanji: "植",
      meaning: "Trồng",
      onYomi: "ショク",
      kunYomi: "うえる",
      similar: "値, 直, 置, 倶, 県, 眞, 署, 買",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "植物 (しょくぶつ)", meaning: "Thực vật", sentence: "植物を観察する。" }
         ],
         kunYomi: [
            { word: "植える (うえる)", meaning: "Trồng", sentence: "木を植える。" }
         ]
      }
   },
   {
      kanji: "順",
      meaning: "Trật tự, thuận lợi",
      onYomi: "ジュン",
      kunYomi: "",
      similar: "側",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "順番 (じゅんばん)", meaning: "Thứ tự", sentence: "順番を待つ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "象",
      meaning: "Hình tượng, voi",
      onYomi: "ショウ, ゾウ",
      kunYomi: "",
      similar: "像",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "印象 (いんしょう)", meaning: "Ấn tượng", sentence: "印象が強い。" },
            { word: "象徴 (しょうちょう)", meaning: "Biểu tượng", sentence: "平和の象徴。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "焼",
      meaning: "Nướng, thiêu",
      onYomi: "ショウ",
      kunYomi: "やく, やける",
      similar: "燃",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "焼却 (しょうきゃく)", meaning: "Thiêu hủy", sentence: "ゴミを焼却する。" }
         ],
         kunYomi: [
            { word: "焼く (やく)", meaning: "Nướng", sentence: "魚を焼く。" }
         ]
      }
   },
   {
      kanji: "勝",
      meaning: "Chiến thắng",
      onYomi: "ショウ",
      kunYomi: "かつ",
      similar: "騰",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "勝利 (しょうり)", meaning: "Chiến thắng", sentence: "試合に勝利する。" }
         ],
         kunYomi: [
            { word: "勝つ (かつ)", meaning: "Thắng", sentence: "試合に勝つ。" }
         ]
      }
   },
   {
      kanji: "歯",
      meaning: "Răng",
      onYomi: "シ",
      kunYomi: "は",
      similar: "噛, 菌, 齢",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "歯科 (しか)", meaning: "Nha khoa", sentence: "歯科に通う。" }
         ],
         kunYomi: [
            { word: "歯 (は)", meaning: "Răng", sentence: "歯を磨く。" }
         ]
      }
   },
   {
      kanji: "最",
      meaning: "Nhất, tối",
      onYomi: "サイ",
      kunYomi: "もっとも",
      similar: "撮",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "最近 (さいきん)", meaning: "Gần đây", sentence: "最近忙しい。" }
         ],
         kunYomi: [
            { word: "最も (もっとも)", meaning: "Nhất", sentence: "最も重要なこと。" }
         ]
      }
   },
   {
      kanji: "散",
      meaning: "Phân tán, rải rác",
      onYomi: "サン",
      kunYomi: "ちる, ちらす",
      similar: "借, 措",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "散歩 (さんぽ)", meaning: "Đi dạo", sentence: "公園を散歩する。" }
         ],
         kunYomi: [
            { word: "散る (ちる)", meaning: "Rơi rụng", sentence: "花が散る。" }
         ]
      }
   },
   {
      kanji: "港",
      meaning: "Cảng",
      onYomi: "コウ",
      kunYomi: "みなと",
      similar: "巻",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "港町 (みなとまち)", meaning: "Thành phố cảng", sentence: "港町を訪れる。" }
         ],
         kunYomi: [
            { word: "港 (みなと)", meaning: "Cảng", sentence: "港に船が着く。" }
         ]
      }
   },
   {
      kanji: "検",
      meaning: "Kiểm tra",
      onYomi: "ケン",
      kunYomi: "",
      similar: "倹, 険, 験, 剣",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "検査 (けんさ)", meaning: "Kiểm tra", sentence: "血液検査を受ける。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "湖",
      meaning: "Hồ",
      onYomi: "コ",
      kunYomi: "みずうみ",
      similar: "潮, 朝, 瑚, 明",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "湖水 (こすい)", meaning: "Nước hồ", sentence: "湖水が澄んでいる。" }
         ],
         kunYomi: [
            { word: "湖 (みずうみ)", meaning: "Hồ", sentence: "湖で泳ぐ。" }
         ]
      }
   },
   {
      kanji: "期",
      meaning: "Thời kỳ",
      onYomi: "キ",
      kunYomi: "",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "期間 (きかん)", meaning: "Thời hạn", sentence: "試験の期間。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "喜",
      meaning: "Vui mừng",
      onYomi: "キ",
      kunYomi: "よろこぶ",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "喜劇 (きげき)", meaning: "Hài kịch", sentence: "喜劇を観る。" }
         ],
         kunYomi: [
            { word: "喜ぶ (よろこぶ)", meaning: "Vui mừng", sentence: "成功を喜ぶ。" }
         ]
      }
   },
   {
      kanji: "結",
      meaning: "Kết nối, buộc",
      onYomi: "ケツ",
      kunYomi: "むすぶ, ゆう",
      similar: "詰, 桔",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "結果 (けっか)", meaning: "Kết quả", sentence: "試験の結果。" }
         ],
         kunYomi: [
            { word: "結ぶ (むすぶ)", meaning: "Buộc, kết nối", sentence: "紐を結ぶ。" }
         ]
      }
   },
   {
      kanji: "景",
      meaning: "Cảnh tượng",
      onYomi: "ケイ",
      kunYomi: "",
      similar: "影, 量",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "景色 (けしき)", meaning: "Phong cảnh", sentence: "美しい景色を見る。" },
            { word: "背景 (はいけい)", meaning: "Bối cảnh", sentence: "背景を説明する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "給",
      meaning: "Cung cấp",
      onYomi: "キュウ",
      kunYomi: "",
      similar: "絵, 緒",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "給料 (きゅうりょう)", meaning: "Tiền lương", sentence: "給料を受け取る。" },
            { word: "供給 (きょうきゅう)", meaning: "Cung cấp", sentence: "電力を供給する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "雲",
      meaning: "Mây",
      onYomi: "ウン",
      kunYomi: "くも",
      similar: "曇",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "雲海 (うんかい)", meaning: "Biển mây", sentence: "山頂から雲海を見る。" }
         ],
         kunYomi: [
            { word: "雲 (くも)", meaning: "Mây", sentence: "空に雲が浮かぶ。" }
         ]
      }
   },
   {
      kanji: "営",
      meaning: "Kinh doanh, điều hành",
      onYomi: "エイ",
      kunYomi: "",
      similar: "堂, 常, 党, 覚, 常",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "営業 (えいぎょう)", meaning: "Kinh doanh", sentence: "店を営業する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "温",
      meaning: "Nhiệt độ, ấm áp",
      onYomi: "オン",
      kunYomi: "あたたかい, あたためる",
      similar: "塩, 湿",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "温度 (おんど)", meaning: "Nhiệt độ", sentence: "温度を測る。" }
         ],
         kunYomi: [
            { word: "温かい (あたたかい)", meaning: "Ấm áp", sentence: "温かいスープを飲む。" }
         ]
      }
   },
   {
      kanji: "過",
      meaning: "Quá, vượt qua",
      onYomi: "カ",
      kunYomi: "すぎる, すごす",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "過去 (かこ)", meaning: "Quá khứ", sentence: "過去を振り返る。" }
         ],
         kunYomi: [
            { word: "過ぎる (すぎる)", meaning: "Quá, vượt qua", sentence: "時間が過ぎる。" }
         ]
      }
   },
   {
      kanji: "絵",
      meaning: "Tranh vẽ",
      onYomi: "エ",
      kunYomi: "",
      similar: "給, 緒",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "絵画 (かいが)", meaning: "Hội họa", sentence: "絵画を鑑賞する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "階",
      meaning: "Tầng, bậc",
      onYomi: "カイ",
      kunYomi: "",
      similar: "陛, 指",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "階段 (かいだん)", meaning: "Cầu thang", sentence: "階段を上る。" },
            { word: "階級 (かいきゅう)", meaning: "Giai cấp", sentence: "階級社会。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "覚",
      meaning: "Nhớ, nhận thức",
      onYomi: "カク",
      kunYomi: "おぼえる, さます",
      similar: "党, 営, 兄, 悦, 況, 祝, 税, 脱, 説",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "覚悟 (かくご)", meaning: "Sẵn sàng", sentence: "危険を覚悟する。" }
         ],
         kunYomi: [
            { word: "覚える (おぼえる)", meaning: "Nhớ", sentence: "単語を覚える。" }
         ]
      }
   },
   {
      kanji: "貯",
      meaning: "Tích trữ, tiết kiệm",
      onYomi: "チョ",
      kunYomi: "たくわえる",
      similar: "預",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "貯金 (ちょきん)", meaning: "Tiết kiệm tiền", sentence: "銀行に貯金する。" }
         ],
         kunYomi: [
            { word: "貯える (たくわえる)", meaning: "Tích trữ", sentence: "食料を貯える。" }
         ]
      }
   },
   {
      kanji: "達",
      meaning: "Đạt được, bạn bè",
      onYomi: "タツ",
      kunYomi: "",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "到達 (とうたつ)", meaning: "Đạt tới", sentence: "目的地に到達する。" },
            { word: "友達 (ともだち)", meaning: "Bạn bè", sentence: "友達と遊ぶ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "測",
      meaning: "Đo lường",
      onYomi: "ソク",
      kunYomi: "はかる",
      similar: "則",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "測定 (そくてい)", meaning: "Đo lường", sentence: "長さを測定する。" }
         ],
         kunYomi: [
            { word: "測る (はかる)", meaning: "Đo", sentence: "体温を測る。" }
         ]
      }
   },
   {
      kanji: "童",
      meaning: "Nhi đồng, trẻ em",
      onYomi: "ドウ",
      kunYomi: "わらべ",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "児童 (じどう)", meaning: "Nhi đồng", sentence: "児童が遊んでいる。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "等",
      meaning: "Đẳng cấp, v.v.",
      onYomi: "トウ",
      kunYomi: "ひとしい",
      similar: "寺",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "平等 (びょうどう)", meaning: "Bình đẳng", sentence: "平等な権利。" }
         ],
         kunYomi: [
            { word: "等しい (ひとしい)", meaning: "Bằng nhau", sentence: "長さが等しい。" }
         ]
      }
   },
   {
      kanji: "湯",
      meaning: "Nước nóng",
      onYomi: "トウ",
      kunYomi: "ゆ",
      similar: "場, 陽, 傷, 易, 楊, 揚",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "熱湯 (ねっとう)", meaning: "Nước sôi", sentence: "熱湯を注ぐ。" }
         ],
         kunYomi: [
            { word: "湯 (ゆ)", meaning: "Nước nóng", sentence: "湯に入る。" }
         ]
      }
   },
   {
      kanji: "登",
      meaning: "Leo lên",
      onYomi: "トウ",
      kunYomi: "のぼる",
      similar: "澄, 発",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "登山 (とざん)", meaning: "Leo núi", sentence: "山に登山する。" }
         ],
         kunYomi: [
            { word: "登る (のぼる)", meaning: "Leo lên", sentence: "階段を登る。" }
         ]
      }
   },
   {
      kanji: "程",
      meaning: "Trình độ, mức độ",
      onYomi: "テイ",
      kunYomi: "ほど",
      similar: "呈",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "程度 (ていど)", meaning: "Mức độ", sentence: "程度が高い。" }
         ],
         kunYomi: [
            { word: "程 (ほど)", meaning: "Khoảng, mức", sentence: "一時間程待つ。" }
         ]
      }
   },
   {
      kanji: "絶",
      meaning: "Tuyệt đối, dứt",
      onYomi: "ゼツ",
      kunYomi: "たえる, たつ",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "絶対 (ぜったい)", meaning: "Tuyệt đối", sentence: "絶対に必要だ。" }
         ],
         kunYomi: [
            { word: "絶える (たえる)", meaning: "Dứt, ngừng", sentence: "声が絶える。" }
         ]
      }
   },
   {
      kanji: "然",
      meaning: "Nhiên, tự nhiên",
      onYomi: "ゼン, ネン",
      kunYomi: "",
      similar: "燃, 黙",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "自然 (しぜん)", meaning: "Tự nhiên", sentence: "自然を守る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "富",
      meaning: "Giàu có",
      onYomi: "フ, フウ",
      kunYomi: "とみ",
      similar: "冨, 副, 幅, 福, 高",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "富豪 (ふごう)", meaning: "Phú hào", sentence: "富豪が住む町。" }
         ],
         kunYomi: [
            { word: "富 (とみ)", meaning: "Giàu có", sentence: "富を築く。" }
         ]
      }
   },
   {
      kanji: "復",
      meaning: "Phục hồi",
      onYomi: "フク",
      kunYomi: "",
      similar: "複, 腹",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "復習 (ふくしゅう)", meaning: "Ôn tập", sentence: "授業を復習する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "費",
      meaning: "Chi phí",
      onYomi: "ヒ",
      kunYomi: "",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "費用 (ひよう)", meaning: "Chi phí", sentence: "費用を計算する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "番",
      meaning: "Số, lượt",
      onYomi: "バン",
      kunYomi: "",
      similar: "審",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "番号 (ばんごう)", meaning: "Số hiệu", sentence: "電話番号を覚える。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "悲",
      meaning: "Buồn",
      onYomi: "ヒ",
      kunYomi: "かなしい",
      similar: "非, 罪",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "悲劇 (ひげき)", meaning: "Bi kịch", sentence: "悲劇が起きた。" }
         ],
         kunYomi: [
            { word: "悲しい (かなしい)", meaning: "Buồn", sentence: "悲しい気持ち。" }
         ]
      }
   },
   {
      kanji: "筆",
      meaning: "Bút",
      onYomi: "ヒツ",
      kunYomi: "ふで",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "鉛筆 (えんぴつ)", meaning: "Bút chì", sentence: "鉛筆で書く。" }
         ],
         kunYomi: [
            { word: "筆 (ふで)", meaning: "Bút lông", sentence: "筆で字を書く。" }
         ]
      }
   },
   {
      kanji: "備",
      meaning: "Chuẩn bị",
      onYomi: "ビ",
      kunYomi: "そなえる",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "準備 (じゅんび)", meaning: "Chuẩn bị", sentence: "旅行の準備をする。" }
         ],
         kunYomi: [
            { word: "備える (そなえる)", meaning: "Chuẩn bị, trang bị", sentence: "災害に備える。" }
         ]
      }
   },
   {
      kanji: "貿",
      meaning: "Thương mại",
      onYomi: "ボウ",
      kunYomi: "",
      similar: "貸, 貧, 貨, 資, 賃, 賛",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "貿易 (ぼうえき)", meaning: "Ngoại thương", sentence: "貿易を拡大する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "無",
      meaning: "Không, vô",
      onYomi: "ム, ブ",
      kunYomi: "ない",
      similar: "焦",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "無理 (むり)", meaning: "Vô lý", sentence: "無理な要求。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "報",
      meaning: "Báo cáo, thông báo",
      onYomi: "ホウ",
      kunYomi: "むくいる",
      similar: "服",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "報告 (ほうこく)", meaning: "Báo cáo", sentence: "先生に結果を報告する。" },
            { word: "情報 (じょうほう)", meaning: "Thông tin", sentence: "情報を集める。" }
         ],
         kunYomi: [
            { word: "報いる (むくいる)", meaning: "Đền đáp", sentence: "努力に報いる。" }
         ]
      }
   },
   {
      kanji: "満",
      meaning: "Đầy đủ, tràn đầy",
      onYomi: "マン",
      kunYomi: "みちる, みたす",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "満足 (まんぞく)", meaning: "Hài lòng", sentence: "結果に満足する。" }
         ],
         kunYomi: [
            { word: "満ちる (みちる)", meaning: "Đầy", sentence: "川が水で満ちる。" }
         ]
      }
   },
   {
      kanji: "量",
      meaning: "Số lượng",
      onYomi: "リョウ",
      kunYomi: "はかる",
      similar: "畳, 景",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "数量 (すうりょう)", meaning: "Số lượng", sentence: "数量を確認する。" }
         ],
         kunYomi: [
            { word: "量る (はかる)", meaning: "Đo lường", sentence: "重さを量る。" }
         ]
      }
   },
   {
      kanji: "遊",
      meaning: "Chơi, du hí",
      onYomi: "ユウ",
      kunYomi: "あそぶ",
      similar: "族, 旅, 旋, 施, 放",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "遊園地 (ゆうえんち)", meaning: "Khu vui chơi", sentence: "遊園地で遊ぶ。" }
         ],
         kunYomi: [
            { word: "遊ぶ (あそぶ)", meaning: "Chơi", sentence: "子供が遊ぶ。" }
         ]
      }
   },
   {
      kanji: "落",
      meaning: "Rơi, rớt",
      onYomi: "ラク",
      kunYomi: "おちる, おとす",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "落下 (らっか)", meaning: "Rơi xuống", sentence: "木から葉が落下する。" }
         ],
         kunYomi: [
            { word: "落ちる (おちる)", meaning: "Rơi", sentence: "石が落ちる。" }
         ]
      }
   },
   {
      kanji: "陽",
      meaning: "Mặt trời, ánh sáng",
      onYomi: "ヨウ",
      kunYomi: "ひ",
      similar: "場, 湯, 傷, 易, 楊, 揚, 憂, 優",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "太陽 (たいよう)", meaning: "Mặt trời", sentence: "太陽が昇る。" }
         ],
         kunYomi: [
            { word: "陽 (ひ)", meaning: "Ánh sáng mặt trời", sentence: "陽を浴びる。" }
         ]
      }
   },
   {
      kanji: "葉",
      meaning: "Lá cây",
      onYomi: "ヨウ",
      kunYomi: "は",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "葉書 (はがき)", meaning: "Bưu thiếp", sentence: "葉書を送る。" }
         ],
         kunYomi: [
            { word: "葉 (は)", meaning: "Lá", sentence: "木の葉が落ちる。" }
         ]
      }
   },
   {
      kanji: "税",
      meaning: "Thuế",
      onYomi: "ゼイ",
      kunYomi: "",
      similar: "脱, 悦, 説, 党, 兄, 況, 祝, 覚",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "税金 (ぜいきん)", meaning: "Tiền thuế", sentence: "税金を払う。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "路",
      meaning: "Đường đi",
      onYomi: "ロ",
      kunYomi: "みち",
      similar: "蕗",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "道路 (どうろ)", meaning: "Đường phố", sentence: "道路を歩く。" }
         ],
         kunYomi: [
            { word: "路 (みち)", meaning: "Đường đi", sentence: "路を探す。" }
         ]
      }
   },
   {
      kanji: "豊",
      meaning: "Phong phú",
      onYomi: "ホウ",
      kunYomi: "ゆたか",
      similar: "",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "豊富 (ほうふ)", meaning: "Phong phú", sentence: "経験が豊富だ。" }
         ],
         kunYomi: [
            { word: "豊か (ゆたか)", meaning: "Giàu có, phong phú", sentence: "自然が豊かだ。" }
         ]
      }
   },
   {
      kanji: "夢",
      meaning: "Giấc mơ",
      onYomi: "ム",
      kunYomi: "ゆめ",
      similar: "濃",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "夢想 (むそう)", meaning: "Mơ tưởng", sentence: "夢想にふける。" }
         ],
         kunYomi: [
            { word: "夢 (ゆめ)", meaning: "Giấc mơ", sentence: "夢を見る。" }
         ]
      }
   },
   {
      kanji: "農",
      meaning: "Nông nghiệp",
      onYomi: "ノウ",
      kunYomi: "",
      similar: "読, 売",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "農業 (のうぎょう)", meaning: "Nông nghiệp", sentence: "農業に従事する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "続",
      meaning: "Tiếp tục",
      onYomi: "ゾク",
      kunYomi: "つづく, つづける",
      similar: "韻, 員, 絹",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "続行 (ぞっこう)", meaning: "Tiếp tục", sentence: "作業を続行する。" }
         ],
         kunYomi: [
            { word: "続ける (つづける)", meaning: "Tiếp tục", sentence: "勉強を続ける。" }
         ]
      }
   },
   {
      kanji: "損",
      meaning: "Tổn thất",
      onYomi: "ソン",
      kunYomi: "そこなう",
      similar: "",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "損害 (そんがい)", meaning: "Thiệt hại", sentence: "損害を受ける。" }
         ],
         kunYomi: [
            { word: "損なう (そこなう)", meaning: "Làm hỏng, tổn hại", sentence: "健康を損なう。" }
         ]
      }
   },
   {
      kanji: "想",
      meaning: "Tưởng tượng, suy nghĩ",
      onYomi: "ソウ",
      kunYomi: "",
      similar: "",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "思想 (しそう)", meaning: "Tư tưởng", sentence: "思想を学ぶ。" },
            { word: "想像 (そうぞう)", meaning: "Tưởng tượng", sentence: "未来を想像する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "戦",
      meaning: "Chiến tranh, chiến đấu",
      onYomi: "セン",
      kunYomi: "たたかう, いくさ",
      similar: "",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "戦争 (せんそう)", meaning: "Chiến tranh", sentence: "戦争が始まった。" },
            { word: "戦略 (せんりゃく)", meaning: "Chiến lược", sentence: "戦略を立てる。" }
         ],
         kunYomi: [
            { word: "戦う (たたかう)", meaning: "Chiến đấu", sentence: "敵と戦う。" }
         ]
      }
   },
   {
      kanji: "勢",
      meaning: "Thế lực, sức mạnh",
      onYomi: "セイ",
      kunYomi: "いきおい",
      similar: "",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "勢力 (せいりょく)", meaning: "Thế lực", sentence: "勢力を拡大する。" }
         ],
         kunYomi: [
            { word: "勢い (いきおい)", meaning: "Sức mạnh, khí thế", sentence: "勢いよく走る。" }
         ]
      }
   },
   {
      kanji: "数",
      meaning: "Số, đếm",
      onYomi: "スウ",
      kunYomi: "かず, かぞえる",
      similar: "教",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "数学 (すうがく)", meaning: "Toán học", sentence: "数学を勉強する。" }
         ],
         kunYomi: [
            { word: "数える (かぞえる)", meaning: "Đếm", sentence: "指で数える。" },
            { word: "数 (かず)", meaning: "Con số", sentence: "人数の数を確認する。" }
         ]
      }
   },
   {
      kanji: "置",
      meaning: "Đặt, để",
      onYomi: "チ",
      kunYomi: "おく",
      similar: "買, 値, 植, 直, 署, 倶, 県, 眞",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "位置 (いち)", meaning: "Vị trí", sentence: "机の位置を変える。" }
         ],
         kunYomi: [
            { word: "置く (おく)", meaning: "Đặt, để", sentence: "本を机に置く。" }
         ]
      }
   },
   {
      kanji: "鉄",
      meaning: "Sắt, thép",
      onYomi: "テツ",
      kunYomi: "",
      similar: "銃, 金, 鉛, 銀, 銅, 鍋",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "鉄道 (てつどう)", meaning: "Đường sắt", sentence: "鉄道で旅行する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "感",
      meaning: "Cảm giác",
      onYomi: "カン",
      kunYomi: "",
      similar: "惑, 減, 域",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "感情 (かんじょう)", meaning: "Cảm xúc", sentence: "感情を表す。" },
            { word: "感謝 (かんしゃ)", meaning: "Biết ơn", sentence: "感謝の気持ちを伝える。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "解",
      meaning: "Giải thích, giải quyết",
      onYomi: "カイ, ゲ",
      kunYomi: "とく, とかす, とける",
      similar: "",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "理解 (りかい)", meaning: "Hiểu biết", sentence: "問題を理解する。" }
         ],
         kunYomi: [
            { word: "解く (とく)", meaning: "Giải quyết", sentence: "謎を解く。" }
         ]
      }
   },
   {
      kanji: "園",
      meaning: "Vườn",
      onYomi: "エン",
      kunYomi: "その",
      similar: "薗",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "公園 (こうえん)", meaning: "Công viên", sentence: "公園で遊ぶ。" }
         ],
         kunYomi: [
            { word: "園 (その)", meaning: "Vườn", sentence: "園で花を育てる。" }
         ]
      }
   },
   {
      kanji: "愛",
      meaning: "Tình yêu",
      onYomi: "アイ",
      kunYomi: "いとしい",
      similar: "恋, 変, 菱",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "愛情 (あいじょう)", meaning: "Tình cảm", sentence: "愛情を示す。" }
         ],
         kunYomi: [
            { word: "愛しい (いとしい)", meaning: "Đáng yêu", sentence: "子供が愛しい。" }
         ]
      }
   },
   {
      kanji: "塩",
      meaning: "Muối",
      onYomi: "エン",
      kunYomi: "しお",
      similar: "温",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "食塩 (しょくえん)", meaning: "Muối ăn", sentence: "食塩を加える。" }
         ],
         kunYomi: [
            { word: "塩 (しお)", meaning: "Muối", sentence: "塩を振る。" }
         ]
      }
   },
   {
      kanji: "極",
      meaning: "Cực, tận cùng",
      onYomi: "キョク, ゴク",
      kunYomi: "きわめる, きわまる",
      similar: "",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "極端 (きょくたん)", meaning: "Cực đoan", sentence: "極端な例を挙げる。" }
         ],
         kunYomi: [
            { word: "極める (きわめる)", meaning: "Cực kỳ, đạt đến", sentence: "技を極める。" }
         ]
      }
   },
   {
      kanji: "禁",
      meaning: "Cấm",
      onYomi: "キン",
      kunYomi: "",
      similar: "",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "禁止 (きんし)", meaning: "Cấm đoán", sentence: "喫煙は禁止されている。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "罪",
      meaning: "Tội lỗi",
      onYomi: "ザイ",
      kunYomi: "つみ",
      similar: "悲, 非, 罰, 扉",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "犯罪 (はんざい)", meaning: "Tội phạm", sentence: "犯罪を防ぐ。" }
         ],
         kunYomi: [
            { word: "罪 (つみ)", meaning: "Tội lỗi", sentence: "罪を犯す。" }
         ]
      }
   },
   {
      kanji: "資",
      meaning: "Tài sản, vốn",
      onYomi: "シ",
      kunYomi: "",
      similar: "貨, 貧, 貸, 貿, 賃, 賛",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "資本 (しほん)", meaning: "Vốn", sentence: "資本を投資する。" },
            { word: "資源 (しげん)", meaning: "Tài nguyên", sentence: "資源を守る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "準",
      meaning: "Chuẩn bị, tiêu chuẩn",
      onYomi: "ジュン",
      kunYomi: "",
      similar: "准, 進, 集",
      stroke: 13,
      examples: {
         onYomi: [
            { word: "準備 (じゅんび)", meaning: "Chuẩn bị", sentence: "旅行の準備をする。" },
            { word: "基準 (きじゅん)", meaning: "Tiêu chuẩn", sentence: "基準を満たす。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "種",
      meaning: "Hạt giống, loại",
      onYomi: "シュ",
      kunYomi: "たね",
      similar: "腫, 重",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "種類 (しゅるい)", meaning: "Chủng loại", sentence: "種類が多い。" }
         ],
         kunYomi: [
            { word: "種 (たね)", meaning: "Hạt giống", sentence: "種をまく。" }
         ]
      }
   },
   {
      kanji: "雑",
      meaning: "Tạp, hỗn tạp",
      onYomi: "ザツ",
      kunYomi: "",
      similar: "",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "雑誌 (ざっし)", meaning: "Tạp chí", sentence: "雑誌を読む。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "際",
      meaning: "Dịp, biên giới",
      onYomi: "サイ",
      kunYomi: "きわ",
      similar: "擦, 祭, 蔡, 察",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "国際 (こくさい)", meaning: "Quốc tế", sentence: "国際会議に参加する。" }
         ],
         kunYomi: [
            { word: "際 (きわ)", meaning: "Bờ, dịp", sentence: "川の際に立つ。" }
         ]
      }
   },
   {
      kanji: "算",
      meaning: "Tính toán",
      onYomi: "サン",
      kunYomi: "そろ",
      similar: "",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "計算 (けいさん)", meaning: "Tính toán", sentence: "計算を間違える。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "察",
      meaning: "Quan sát, suy xét",
      onYomi: "サツ",
      kunYomi: "",
      similar: "擦, 祭, 蔡, 際",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "警察 (けいさつ)", meaning: "Cảnh sát", sentence: "警察に通報する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "構",
      meaning: "Cấu trúc",
      onYomi: "コウ",
      kunYomi: "かまえる, かまう",
      similar: "講, 横",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "構造 (こうぞう)", meaning: "Cấu trúc", sentence: "建物の構造。" }
         ],
         kunYomi: [
            { word: "構える (かまえる)", meaning: "Chuẩn bị, vào tư thế", sentence: "店を構える。" }
         ]
      }
   },
   {
      kanji: "関",
      meaning: "Liên quan, cửa ải",
      onYomi: "カン",
      kunYomi: "せき",
      similar: "閑, 開, 閉, 間, 問",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "関係 (かんけい)", meaning: "Quan hệ", sentence: "関係を築く。" }
         ],
         kunYomi: [
            { word: "関 (せき)", meaning: "Cửa ải", sentence: "関を越える。" }
         ]
      }
   },
   {
      kanji: "境",
      meaning: "Biên giới, ranh giới",
      onYomi: "キョウ, ケイ",
      kunYomi: "さかい",
      similar: "",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "国境 (こっきょう)", meaning: "Biên giới quốc gia", sentence: "国境を越える。" }
         ],
         kunYomi: [
            { word: "境 (さかい)", meaning: "Ranh giới", sentence: "境を分ける。" }
         ]
      }
   },
   {
      kanji: "漁",
      meaning: "Đánh cá",
      onYomi: "ギョ, リョウ",
      kunYomi: "あさる",
      similar: "魚, 侮, 悔, 梅, 毎, 海",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "漁業 (ぎょぎょう)", meaning: "Ngư nghiệp", sentence: "漁業に従事する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "演",
      meaning: "Diễn xuất",
      onYomi: "エン",
      kunYomi: "",
      similar: "漠",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "演劇 (えんげき)", meaning: "Kịch nghệ", sentence: "演劇を観る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "慣",
      meaning: "Thói quen",
      onYomi: "カン",
      kunYomi: "なれる, ならす",
      similar: "貴, 遺, 貫, 憧",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "習慣 (しゅうかん)", meaning: "Thói quen", sentence: "良い習慣を身につける。" }
         ],
         kunYomi: [
            { word: "慣れる (なれる)", meaning: "Quen với", sentence: "生活に慣れる。" }
         ]
      }
   },
   {
      kanji: "管",
      meaning: "Ống, quản lý",
      onYomi: "カン",
      kunYomi: "くだ",
      similar: "菅, 官, 追, 館",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "管理 (かんり)", meaning: "Quản lý", sentence: "会社を管理する。" }
         ],
         kunYomi: [
            { word: "管 (くだ)", meaning: "Ống", sentence: "水道管を修理する。" }
         ]
      }
   },
   {
      kanji: "銅",
      meaning: "Đồng (kim loại)",
      onYomi: "ドウ",
      kunYomi: "",
      similar: "鉛, 金, 鉄, 銀, 鍋",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "銅像 (どうぞう)", meaning: "Tượng đồng", sentence: "銅像を建てる。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "適",
      meaning: "Thích hợp",
      onYomi: "テキ",
      kunYomi: "",
      similar: "商, 嫡, 摘, 敵, 滴, 鏑",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "適切 (てきせつ)", meaning: "Thích hợp", sentence: "適切な方法を選ぶ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "精",
      meaning: "Tinh thần, tinh túy",
      onYomi: "セイ, ショウ",
      kunYomi: "",
      similar: "靖, 清, 晴, 青, 請, 情",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "精神 (せいしん)", meaning: "Tinh thần", sentence: "精神を鍛える。" },
            { word: "精密 (せいみつ)", meaning: "Tinh vi, chính xác", sentence: "精密な機械。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "製",
      meaning: "Chế tạo, sản xuất",
      onYomi: "セイ",
      kunYomi: "",
      similar: "制, 整, 装",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "製品 (せいひん)", meaning: "Sản phẩm", sentence: "新しい製品を発売する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "静",
      meaning: "Yên tĩnh",
      onYomi: "セイ, ジョウ",
      kunYomi: "しずか",
      similar: "",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "静止 (せいし)", meaning: "Đứng yên", sentence: "車が静止する。" }
         ],
         kunYomi: [
            { word: "静か (しずか)", meaning: "Yên tĩnh", sentence: "静かな場所で休む。" }
         ]
      }
   },
   {
      kanji: "像",
      meaning: "Hình tượng",
      onYomi: "ゾウ",
      kunYomi: "",
      similar: "象",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "仏像 (ぶつぞう)", meaning: "Tượng Phật", sentence: "仏像を拝む。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "増",
      meaning: "Tăng thêm",
      onYomi: "ゾウ",
      kunYomi: "ます, ふえる, ふやす",
      similar: "憎, 贈",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "増加 (ぞうか)", meaning: "Gia tăng", sentence: "人口が増加する。" }
         ],
         kunYomi: [
            { word: "増える (ふえる)", meaning: "Tăng lên", sentence: "売上が増える。" }
         ]
      }
   },
   {
      kanji: "総",
      meaning: "Tổng cộng",
      onYomi: "ソウ",
      kunYomi: "",
      similar: "",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "総合 (そうごう)", meaning: "Tổng hợp", sentence: "総合的に判断する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "鼻",
      meaning: "Mũi",
      onYomi: "ビ",
      kunYomi: "はな",
      similar: "鼾",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "鼻炎 (びえん)", meaning: "Viêm mũi", sentence: "鼻炎に悩む。" }
         ],
         kunYomi: [
            { word: "鼻 (はな)", meaning: "Mũi", sentence: "鼻で息をする。" }
         ]
      }
   },
   {
      kanji: "複",
      meaning: "Phức tạp, nhiều",
      onYomi: "フク",
      kunYomi: "",
      similar: "復, 腹",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "複雑 (ふくざつ)", meaning: "Phức tạp", sentence: "問題が複雑だ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "鳴",
      meaning: "Kêu, hót",
      onYomi: "メイ",
      kunYomi: "なく, なる, ならす",
      similar: "鳥, 島, 嶋, 烏, 馬, 鴬",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "鳴声 (めいせい)", meaning: "Tiếng kêu", sentence: "鳥の鳴声が聞こえる。" }
         ],
         kunYomi: [
            { word: "鳴く (なく)", meaning: "Kêu, hót", sentence: "犬が鳴く。" }
         ]
      }
   },
   {
      kanji: "綿",
      meaning: "Bông, sợi bông",
      onYomi: "メン",
      kunYomi: "わた",
      similar: "締",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "綿布 (めんぷ)", meaning: "Vải bông", sentence: "綿布で服を作る。" }
         ],
         kunYomi: [
            { word: "綿 (わた)", meaning: "Bông", sentence: "綿を詰める。" }
         ]
      }
   },
   {
      kanji: "様",
      meaning: "Dáng vẻ, ngài",
      onYomi: "ヨウ",
      kunYomi: "さま",
      similar: "",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "様式 (ようしき)", meaning: "Phong cách", sentence: "様式を守る。" }
         ],
         kunYomi: [
            { word: "様 (さま)", meaning: "Ngài, dáng vẻ", sentence: "神様に祈る。" }
         ]
      }
   },
   {
      kanji: "領",
      meaning: "Lãnh thổ",
      onYomi: "リョウ",
      kunYomi: "",
      similar: "",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "領土 (りょうど)", meaning: "Lãnh thổ", sentence: "領土を守る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "緑",
      meaning: "Màu xanh lá",
      onYomi: "リョク",
      kunYomi: "みどり",
      similar: "禄, 縁",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "緑地 (りょくち)", meaning: "Khu vực xanh", sentence: "緑地で遊ぶ。" }
         ],
         kunYomi: [
            { word: "緑 (みどり)", meaning: "Màu xanh lá", sentence: "緑の森。" }
         ]
      }
   },
   {
      kanji: "練",
      meaning: "Luyện tập",
      onYomi: "レン",
      kunYomi: "ねる",
      similar: "",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "練習 (れんしゅう)", meaning: "Luyện tập", sentence: "日本語を練習する。" }
         ],
         kunYomi: [
            { word: "練る (ねる)", meaning: "Nhào, luyện", sentence: "計画を練る。" }
         ]
      }
   },
   {
      kanji: "歴",
      meaning: "Lịch sử",
      onYomi: "レキ",
      kunYomi: "",
      similar: "暦",
      stroke: 14,
      examples: {
         onYomi: [
            { word: "歴史 (れきし)", meaning: "Lịch sử", sentence: "歴史を学ぶ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "輪",
      meaning: "Vòng, bánh xe",
      onYomi: "リン",
      kunYomi: "わ",
      similar: "論, 愉, 諭, 輸, 倫",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "車輪 (しゃりん)", meaning: "Bánh xe", sentence: "車輪が回る。" }
         ],
         kunYomi: [
            { word: "輪 (わ)", meaning: "Vòng tròn", sentence: "輪になって座る。" }
         ]
      }
   },
   {
      kanji: "編",
      meaning: "Biên tập, sắp xếp",
      onYomi: "ヘン",
      kunYomi: "あむ",
      similar: "偏, 逼, 遍",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "編集 (へんしゅう)", meaning: "Biên tập", sentence: "記事を編集する。" }
         ],
         kunYomi: [
            { word: "編む (あむ)", meaning: "Đan, biên soạn", sentence: "セーターを編む。" }
         ]
      }
   },
   {
      kanji: "箱",
      meaning: "Hộp",
      onYomi: "ソウ",
      kunYomi: "はこ",
      similar: "",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "箱庭 (はこにわ)", meaning: "Vườn cảnh trong hộp", sentence: "箱庭を作る。" }
         ],
         kunYomi: [
            { word: "箱 (はこ)", meaning: "Hộp", sentence: "箱に入れる。" }
         ]
      }
   },
   {
      kanji: "熱",
      meaning: "Nhiệt, nóng",
      onYomi: "ネツ",
      kunYomi: "あつい",
      similar: "燃",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "熱心 (ねっしん)", meaning: "Nhiệt tình", sentence: "勉強に熱心だ。" }
         ],
         kunYomi: [
            { word: "熱い (あつい)", meaning: "Nóng", sentence: "熱いお茶を飲む。" }
         ]
      }
   },
   {
      kanji: "選",
      meaning: "Chọn lựa",
      onYomi: "セン",
      kunYomi: "えらぶ",
      similar: "",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "選択 (せんたく)", meaning: "Lựa chọn", sentence: "選択を間違える。" }
         ],
         kunYomi: [
            { word: "選ぶ (えらぶ)", meaning: "Chọn", sentence: "本を選ぶ。" }
         ]
      }
   },
   {
      kanji: "線",
      meaning: "Đường thẳng, tuyến",
      onYomi: "セン",
      kunYomi: "",
      similar: "",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "線路 (せんろ)", meaning: "Đường ray", sentence: "線路を歩く。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "導",
      meaning: "Hướng dẫn",
      onYomi: "ドウ",
      kunYomi: "みちびく",
      similar: "",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "指導 (しどう)", meaning: "Chỉ đạo", sentence: "先生が指導する。" }
         ],
         kunYomi: [
            { word: "導く (みちびく)", meaning: "Dẫn dắt", sentence: "成功へ導く。" }
         ]
      }
   },
   {
      kanji: "談",
      meaning: "Đàm thoại",
      onYomi: "ダン",
      kunYomi: "",
      similar: "淡",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "相談 (そうだん)", meaning: "Trao đổi, bàn bạc", sentence: "友達に相談する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "調",
      meaning: "Điều chỉnh, điều tra",
      onYomi: "チョウ",
      kunYomi: "しらべる, ととのえる",
      similar: "周, 週",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "調査 (ちょうさ)", meaning: "Điều tra", sentence: "事故を調査する。" }
         ],
         kunYomi: [
            { word: "調べる (しらべる)", meaning: "Điều tra, tìm hiểu", sentence: "辞書で調べる。" }
         ]
      }
   },
   {
      kanji: "横",
      meaning: "Ngang, bên cạnh",
      onYomi: "オウ",
      kunYomi: "よこ",
      similar: "黄, 構",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "横断 (おうだん)", meaning: "Băng qua", sentence: "道路を横断する。" }
         ],
         kunYomi: [
            { word: "横 (よこ)", meaning: "Bên cạnh", sentence: "横に座る。" }
         ]
      }
   },
   {
      kanji: "確",
      meaning: "Xác thực, chắc chắn",
      onYomi: "カク",
      kunYomi: "たしか",
      similar: "権, 歓",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "確認 (かくにん)", meaning: "Xác nhận", sentence: "予定を確認する。" }
         ],
         kunYomi: [
            { word: "確か (たしか)", meaning: "Chắc chắn", sentence: "確かにそうだ。" }
         ]
      }
   },
   {
      kanji: "課",
      meaning: "Bài học, nhiệm vụ",
      onYomi: "カ",
      kunYomi: "",
      similar: "果, 菓, 巣, 単, 裸",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "課題 (かだい)", meaning: "Vấn đề, nhiệm vụ", sentence: "課題を解決する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "器",
      meaning: "Đồ chứa, khí cụ",
      onYomi: "キ",
      kunYomi: "うつわ",
      similar: "噐, 品",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "楽器 (がっき)", meaning: "Nhạc cụ", sentence: "楽器を演奏する。" }
         ],
         kunYomi: [
            { word: "器 (うつわ)", meaning: "Đồ chứa", sentence: "器に水を入れる。" }
         ]
      }
   },
   {
      kanji: "賛",
      meaning: "Tán thành",
      onYomi: "サン",
      kunYomi: "",
      similar: "貧, 貨, 貸, 貿, 賃, 資",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "賛成 (さんせい)", meaning: "Tán thành", sentence: "提案に賛成する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "賞",
      meaning: "Phần thưởng",
      onYomi: "ショウ",
      kunYomi: "",
      similar: "員",
      stroke: 15,
      examples: {
         onYomi: [
            { word: "受賞 (じゅしょう)", meaning: "Nhận giải thưởng", sentence: "賞を受賞する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "機",
      meaning: "Máy móc, cơ hội",
      onYomi: "キ",
      kunYomi: "はた",
      similar: "磯",
      stroke: 16,
      examples: {
         onYomi: [
            { word: "機械 (きかい)", meaning: "Máy móc", sentence: "機械を操作する。" },
            { word: "機会 (きかい)", meaning: "Cơ hội", sentence: "良い機会を得る。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "橋",
      meaning: "Cầu",
      onYomi: "キョウ",
      kunYomi: "はし",
      similar: "",
      stroke: 16,
      examples: {
         onYomi: [
            { word: "橋梁 (きょうりょう)", meaning: "Cầu", sentence: "橋梁を建設する。" }
         ],
         kunYomi: [
            { word: "橋 (はし)", meaning: "Cầu", sentence: "橋を渡る。" }
         ]
      }
   },
   {
      kanji: "築",
      meaning: "Xây dựng",
      onYomi: "チク",
      kunYomi: "きずく",
      similar: "",
      stroke: 16,
      examples: {
         onYomi: [
            { word: "建築 (けんちく)", meaning: "Kiến trúc", sentence: "建築を学ぶ。" }
         ],
         kunYomi: [
            { word: "築く (きずく)", meaning: "Xây dựng", sentence: "家を築く。" }
         ]
      }
   },
   {
      kanji: "積",
      meaning: "Tích lũy",
      onYomi: "セキ",
      kunYomi: "つむ, つもる",
      similar: "績, 責",
      stroke: 16,
      examples: {
         onYomi: [
            { word: "積極 (せっきょく)", meaning: "Tích cực", sentence: "積極的に参加する。" }
         ],
         kunYomi: [
            { word: "積む (つむ)", meaning: "Chất, tích lũy", sentence: "荷物を積む。" }
         ]
      }
   },
   {
      kanji: "輸",
      meaning: "Vận chuyển, nhập khẩu",
      onYomi: "ユ",
      kunYomi: "",
      similar: "愉, 諭, 論, 輪",
      stroke: 16,
      examples: {
         onYomi: [
            { word: "輸入 (ゆにゅう)", meaning: "Nhập khẩu", sentence: "商品を輸入する。" },
            { word: "輸出 (ゆしゅつ)", meaning: "Xuất khẩu", sentence: "米を輸出する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "録",
      meaning: "Ghi chép",
      onYomi: "ロク",
      kunYomi: "",
      similar: "縁",
      stroke: 16,
      examples: {
         onYomi: [
            { word: "記録 (きろく)", meaning: "Kỷ lục, ghi chép", sentence: "記録を残す。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "績",
      meaning: "Thành tích",
      onYomi: "セキ",
      kunYomi: "",
      similar: "積, 責",
      stroke: 16,
      examples: {
         onYomi: [
            { word: "成績 (せいせき)", meaning: "Thành tích", sentence: "成績が良い。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "講",
      meaning: "Giảng, bài giảng",
      onYomi: "コウ",
      kunYomi: "",
      similar: "構",
      stroke: 16,
      examples: {
         onYomi: [
            { word: "講義 (こうぎ)", meaning: "Bài giảng", sentence: "講義を受ける。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "職",
      meaning: "Nghề nghiệp",
      onYomi: "ショク",
      kunYomi: "",
      similar: "織, 識, 繊",
      stroke: 16,
      examples: {
         onYomi: [
            { word: "職業 (しょくぎょう)", meaning: "Nghề nghiệp", sentence: "職業を選ぶ。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "観",
      meaning: "Quan sát",
      onYomi: "カン",
      kunYomi: "みる",
      similar: "勧",
      stroke: 18,
      examples: {
         onYomi: [
            { word: "観光 (かんこう)", meaning: "Du lịch", sentence: "観光に行く。" }
         ],
         kunYomi: [
            { word: "観る (みる)", meaning: "Xem, quan sát", sentence: "映画を観る。" }
         ]
      }
   },
   {
      kanji: "額",
      meaning: "Trán, số lượng",
      onYomi: "ガク",
      kunYomi: "ひたい",
      similar: "頭, 題",
      stroke: 18,
      examples: {
         onYomi: [
            { word: "金額 (きんがく)", meaning: "Số tiền", sentence: "金額を確認する。" }
         ],
         kunYomi: [
            { word: "額 (ひたい)", meaning: "Trán", sentence: "額に汗をかく。" }
         ]
      }
   },
   {
      kanji: "類",
      meaning: "Loại, chủng loại",
      onYomi: "ルイ",
      kunYomi: "",
      similar: "",
      stroke: 18,
      examples: {
         onYomi: [
            { word: "種類 (しゅるい)", meaning: "Chủng loại", sentence: "種類が多い。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "願",
      meaning: "Nguyện vọng",
      onYomi: "ガン",
      kunYomi: "ねがう",
      similar: "",
      stroke: 18,
      examples: {
         onYomi: [
            { word: "願望 (がんぼう)", meaning: "Nguyện vọng", sentence: "願望を持つ。" }
         ],
         kunYomi: [
            { word: "願う (ねがう)", meaning: "Mong muốn", sentence: "成功を願う。" }
         ]
      }
   },
   {
      kanji: "識",
      meaning: "Tri thức, nhận thức",
      onYomi: "シキ",
      kunYomi: "",
      similar: "織, 職, 繊",
      stroke: 18,
      examples: {
         onYomi: [
            { word: "知識 (ちしき)", meaning: "Tri thức", sentence: "知識を増やす。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "競",
      meaning: "Cạnh tranh",
      onYomi: "キョウ, ケイ",
      kunYomi: "きそう",
      similar: "",
      stroke: 20,
      examples: {
         onYomi: [
            { word: "競争 (きょうそう)", meaning: "Cạnh tranh", sentence: "競争が激しい。" }
         ],
         kunYomi: [
            { word: "競う (きそう)", meaning: "Tranh đua", sentence: "速さを競う。" }
         ]
      }
   },
   {
      kanji: "議",
      meaning: "Bàn bạc, nghị luận",
      onYomi: "ギ",
      kunYomi: "",
      similar: "儀, 義, 犠",
      stroke: 20,
      examples: {
         onYomi: [
            { word: "会議 (かいぎ)", meaning: "Cuộc họp", sentence: "会議を開く。" },
            { word: "議論 (ぎろん)", meaning: "Tranh luận", sentence: "議論を続ける。" },
            { word: "国会議員 (こっかいぎいん)", meaning: "Nghị sĩ quốc hội", sentence: "国会議員が発言する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "介",
      meaning: "Giới thiệu, trung gian",
      onYomi: "カイ",
      kunYomi: "",
      similar: "",
      stroke: 4,
      examples: {
         onYomi: [
            { word: "紹介 (しょうかい)", meaning: "Giới thiệu", sentence: "友人を紹介する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "洗",
      meaning: "Rửa",
      onYomi: "セン",
      kunYomi: "あらう",
      similar: "",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "洗濯 (せんたく)", meaning: "Giặt giũ", sentence: "洗濯をする。" }
         ],
         kunYomi: [
            { word: "洗う (あらう)", meaning: "Rửa", sentence: "手を洗う。" }
         ]
      }
   },
   {
      kanji: "濯",
      meaning: "Giặt, súc",
      onYomi: "タク",
      kunYomi: "",
      similar: "",
      stroke: 17,
      examples: {
         onYomi: [
            { word: "洗濯 (せんたく)", meaning: "Giặt giũ", sentence: "服を洗濯する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "干",
      meaning: "Phơi khô",
      onYomi: "カン",
      kunYomi: "ほす, ひる",
      similar: "",
      stroke: 3,
      examples: {
         onYomi: [
            { word: "干渉 (かんしょう)", meaning: "Can thiệp", sentence: "他国に干渉する。" }
         ],
         kunYomi: [
            { word: "干す (ほす)", meaning: "Phơi khô", sentence: "洗濯物を干す。" }
         ]
      }
   },
   {
      kanji: "捨",
      meaning: "Vứt bỏ",
      onYomi: "シャ",
      kunYomi: "すてる",
      similar: "",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "捨て身 (すてみ)", meaning: "Hy sinh", sentence: "捨て身で戦う。" }
         ],
         kunYomi: [
            { word: "捨てる (すてる)", meaning: "Vứt bỏ", sentence: "ゴミを捨てる。" }
         ]
      }
   },
   {
      kanji: "拾",
      meaning: "Nhặt",
      onYomi: "シュウ, ジュウ",
      kunYomi: "ひろう",
      similar: "",
      stroke: 9,
      examples: {
         onYomi: [
            { word: "拾得 (しゅうとく)", meaning: "Nhặt được", sentence: "財布を拾得する。" }
         ],
         kunYomi: [
            { word: "拾う (ひろう)", meaning: "Nhặt", sentence: "道でコインを拾う。" }
         ]
      }
   },
   {
      kanji: "袋",
      meaning: "Túi",
      onYomi: "タイ",
      kunYomi: "ふくろ",
      similar: "",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "手袋 (てぶくろ)", meaning: "Găng tay", sentence: "手袋をはめる。" }
         ],
         kunYomi: [
            { word: "袋 (ふくろ)", meaning: "Túi", sentence: "袋に入れる。" }
         ]
      }
   },
   {
      kanji: "翌",
      meaning: "Ngày hôm sau",
      onYomi: "ヨク",
      kunYomi: "",
      similar: "",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "翌日 (よくじつ)", meaning: "Ngày hôm sau", sentence: "翌日に出発する。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "押",
      meaning: "Ấn, nhấn",
      onYomi: "オウ",
      kunYomi: "おす",
      similar: "",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "押印 (おういん)", meaning: "Đóng dấu", sentence: "書類に押印する。" }
         ],
         kunYomi: [
            { word: "押す (おす)", meaning: "Ấn, nhấn", sentence: "ボタンを押す。" }
         ]
      }
   },
   {
      kanji: "粉",
      meaning: "Bột",
      onYomi: "フン",
      kunYomi: "こな, こ",
      similar: "",
      stroke: 10,
      examples: {
         onYomi: [
            { word: "粉末 (ふんまつ)", meaning: "Bột mịn", sentence: "粉末を溶かす。" }
         ],
         kunYomi: [
            { word: "粉 (こな)", meaning: "Bột", sentence: "小麦粉を使う。" }
         ]
      }
   },
   {
      kanji: "豆",
      meaning: "Đậu",
      onYomi: "トウ, ズ",
      kunYomi: "まめ",
      similar: "",
      stroke: 7,
      examples: {
         onYomi: [
            { word: "豆腐 (とうふ)", meaning: "Đậu phụ", sentence: "豆腐を食べる。" }
         ],
         kunYomi: [
            { word: "豆 (まめ)", meaning: "Hạt đậu", sentence: "豆を煮る。" }
         ]
      }
   },
   {
      kanji: "菜",
      meaning: "Rau",
      onYomi: "サイ",
      kunYomi: "な",
      similar: "",
      stroke: 11,
      examples: {
         onYomi: [
            { word: "野菜 (やさい)", meaning: "Rau", sentence: "野菜を食べる。" }
         ],
         kunYomi: [
            { word: "菜 (な)", meaning: "Rau", sentence: "菜を育てる。" }
         ]
      }
   },
   {
      kanji: "缶",
      meaning: "Lon",
      onYomi: "カン",
      kunYomi: "",
      similar: "",
      stroke: 12,
      examples: {
         onYomi: [
            { word: "缶詰 (かんづめ)", meaning: "Đồ hộp", sentence: "缶詰を開ける。" }
         ],
         kunYomi: []
      }
   },
   {
      kanji: "果",
      meaning: "Quả, kết quả",
      onYomi: "カ",
      kunYomi: "はたす, はてる, はて",
      similar: "",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "成果 (せいか)", meaning: "Thành quả", sentence: "成果を得る。" }
         ],
         kunYomi: [
            { word: "果物 (くだもの)", meaning: "Hoa quả", sentence: "果物を食べる。" }
         ]
      }
   },
   {
      kanji: "呼",
      meaning: "Gọi",
      onYomi: "コ",
      kunYomi: "よぶ",
      similar: "",
      stroke: 8,
      examples: {
         onYomi: [
            { word: "呼吸 (こきゅう)", meaning: "Hô hấp", sentence: "呼吸を整える。" }
         ],
         kunYomi: [
            { word: "呼ぶ (よぶ)", meaning: "Gọi", sentence: "友達を呼ぶ。" }
         ]
      }
   },
   {
      kanji: "汗",
      meaning: "Mồ hôi",
      onYomi: "カン",
      kunYomi: "あせ",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "発汗 (はっかん)", meaning: "Đổ mồ hôi", sentence: "運動で発汗する。" }
         ],
         kunYomi: [
            { word: "汗 (あせ)", meaning: "Mồ hôi", sentence: "汗をかく。" }
         ]
      }
   },
   {
      kanji: "吸",
      meaning: "Hít, hút",
      onYomi: "キュウ",
      kunYomi: "すう",
      similar: "",
      stroke: 6,
      examples: {
         onYomi: [
            { word: "吸収 (きゅうしゅう)", meaning: "Hấp thụ", sentence: "水分を吸収する。" }
         ],
         kunYomi: [
            { word: "吸う (すう)", meaning: "Hít, hút", sentence: "空気を吸う。" }
         ]
      }
   },
];