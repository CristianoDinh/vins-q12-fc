import { Injectable } from '@angular/core';
import {News} from '../interface/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor() { }

  protected newsList: News[] = [
    // {
    //   id: 1,
    //   title: "A",
    //   subtitle: "TEST",
    //   content: "",
    //   type: "",
    //   dateCreated: new Date('2025-02-05'),
    // },
    {
      id: 2,
      title: "CLB Vins Q12 \"Giang Tay\" với Paul Pogba Sau Scandal Cấm Thi Đấu",
      subtitle: "Sau lùm xùm cấm thi đấu từ FIFA, Paul Pogba đang đối mặt với tương lai bất định. Tuy nhiên, CLB Vins Q12 đã ngỏ lời chiêu mộ anh, hy vọng tạo cơ hội để ngôi sao người Pháp làm lại sự nghiệp và chứng tỏ khả năng tại môi trường bóng đá Việt Nam.",
      content: "Trong những ngày gần đây, Paul Pogba, ngôi sao nổi bật của bóng đá thế giới, đã gây chấn động khi bị FIFA cấm thi đấu do liên quan đến một vụ việc nghiêm trọng. Mặc dù tương lai của anh đang mờ mịt và bị bao vây bởi những rắc rối pháp lý, nhưng CLB Vins Q12 vẫn giữ vững quan điểm: \"Tài năng và sức hút của Pogba là không thể phủ nhận.\"\n" +
        "\n" +
        "CLB Vins Q12, với tiềm lực tài chính mạnh mẽ và tham vọng vươn tầm quốc tế, đã chính thức gửi lời mời đến Pogba. Đại diện của đội bóng này cho biết: \"Dù tình hình hiện tại có khó khăn, chúng tôi vẫn nhìn thấy cơ hội lớn từ việc chiêu mộ một ngôi sao như Pogba. Đây là cơ hội để anh ấy quay lại với đam mê bóng đá, và cùng chúng tôi xây dựng một CLB ngày càng vươn xa.\"\n" +
        "\n" +
        "Với những ồn ào từ vụ scandal, không ít người nghi ngờ về quyết định của CLB Vins Q12. Tuy nhiên, đội bóng này tin rằng, thông qua việc gia nhập, Pogba sẽ có một sân chơi lý tưởng để lấy lại phong độ, cũng như viết tiếp câu chuyện sự nghiệp của mình. Nhiều người vẫn hy vọng rằng, qua những bước đi táo bạo này, CLB Vins Q12 sẽ không chỉ làm mới đội hình mà còn góp phần đưa bóng đá Việt Nam lên tầm cao mới.\n" +
        "\n" +
        "Trong khi tương lai của Pogba vẫn còn mập mờ, câu chuyện này chắc chắn sẽ là đề tài nóng bỏng trong làng bóng đá quốc tế, nhất là khi CLB Vins Q12 quyết định mạo hiểm đầu tư vào một tài năng lớn nhưng cũng đầy rủi ro.",
      type: "others",
      dateCreated: new Date('2025-04-01T06:06:00'),
      imgUrl: 'news-2-update.png'
    },
    {
      id: 3,
      title: "Martin Ødegaard: Câu Chuyện Của Một Tài Năng Bị Dồn Nén Dưới Áp Lực",
      subtitle: "Martin Ødegaard từng được xem là một trong những tài năng sáng giá của bóng đá thế giới, với kỹ thuật và khả năng điều khiển nhịp độ trận đấu ấn tượng. Tuy nhiên, dưới áp lực khổng lồ của việc thi đấu tại các câu lạc bộ lớn, sự nghiệp của anh lại gặp phải những bước ngoặt đầy khó khăn.",
      content: "Kể từ khi còn là một tài năng trẻ đầy hứa hẹn, Martin Ødegaard đã gây ấn tượng mạnh mẽ với những màn trình diễn xuất sắc tại các cấp độ trẻ của Na Uy, đồng thời thu hút sự chú ý của các câu lạc bộ hàng đầu châu Âu. Với kỹ thuật điêu luyện và khả năng chuyền bóng thông minh, anh được kỳ vọng sẽ là ngôi sao tiếp theo của bóng đá thế giới. Tuy nhiên, con đường sự nghiệp của Ødegaard không phải lúc nào cũng trải đầy hoa hồng.\n" +
        "\n" +
        "Sự gia nhập của Ødegaard vào Real Madrid khi còn rất trẻ là một bước đi đáng chú ý, nhưng cũng mang đến áp lực không nhỏ. Trong bối cảnh một câu lạc bộ giàu tham vọng như Real, việc duy trì phong độ và sự ổn định là điều vô cùng khó khăn. Sau những lần cho mượn tại các đội bóng khác như Heerenveen và Vitesse, Ødegaard đã dần khẳng định được mình tại Real Sociedad và sau đó là Arsenal, nơi anh đang dần lấy lại phong độ và chứng minh giá trị.\n" +
        "\n" +
        "Tuy nhiên, sự nghiệp của Ødegaard không chỉ bị ảnh hưởng bởi áp lực từ các câu lạc bộ lớn mà còn bởi những kỳ vọng quá lớn từ truyền thông và người hâm mộ. Dù đã vượt qua được một số giai đoạn khó khăn, nhưng câu hỏi về việc liệu anh có thể vươn lên trở thành một huyền thoại thực sự hay không vẫn còn là một dấu hỏi lớn.\n" +
        "\n" +
        "Bước vào giai đoạn trưởng thành, Ødegaard vẫn còn nhiều cơ hội để viết lại câu chuyện sự nghiệp của mình. Nhưng có lẽ, những áp lực mà anh phải đối mặt trong suốt hành trình của mình là điều không dễ dàng để vượt qua. Liệu Ødegaard có thể chứng minh được giá trị của mình và trở thành một ngôi sao lớn như người ta từng kỳ vọng?\n" +
        "\n",
      type: "players",
      dateCreated: new Date('2025-03-22T06:09:00'),
      imgUrl: 'news-1.jpg'
    },
    {
      id: 4,
      title: "Mes'Son: \"Không có tập thể này, sẽ không có tôi ngày hôm nay !\" ",
      subtitle: "Mes'Son - sở hữu khả năng đi bóng thiên phú nhưng lại lạm dụng ở nhiều thời điểm không hợp lý. Gia nhập Vins Q12, anh đã tìm thấy sự cân bằng và phát triển mạnh mẽ hơn bao giờ hết, nhờ vào sự hỗ trợ từ các đồng đội và ban huấn luyện.",
      content: "Mes'Son, một trong những ngôi sao bóng đá trẻ triển vọng, đã luôn nổi bật với khả năng đi bóng đầy ma thuật và sự linh hoạt tuyệt vời trên sân. Tuy nhiên, sự thiếu kiên nhẫn và việc lạm dụng kỹ thuật cá nhân ở những thời điểm không phù hợp đã khiến anh phải trải qua những thất bại đáng tiếc trong sự nghiệp. Trước khi gia nhập CLB Vins Q12, Mes'Son luôn được xem là một tài năng \"chưa thực sự được khai thác hết\" vì không thể hòa nhập với lối chơi tập thể.\n" +
        "\n" +
        "Chuyển đến Vins Q12, Mes'Son đã có cơ hội làm lại sự nghiệp của mình dưới sự chỉ dẫn của các huấn luyện viên tài ba và sự hỗ trợ từ các đồng đội giàu kinh nghiệm. “Không có tập thể này, sẽ không có tôi ngày hôm nay,” Mes'Son chia sẻ, nhấn mạnh sự quan trọng của việc làm việc cùng nhau trong bóng đá. Tại đây, anh đã học được cách phát huy sức mạnh cá nhân mà không làm ảnh hưởng đến chiến thuật chung, và cũng dần trở thành một nhân tố quan trọng trong đội hình của Vins Q12.\n" +
        "\n" +
        "Với sự hỗ trợ từ tập thể mạnh mẽ, Mes'Son đã có sự chuyển mình đáng kể, không chỉ trong lối chơi mà còn trong cách nhìn nhận về vai trò của mình trên sân cỏ. Từng bước, anh đã thể hiện sự trưởng thành, không còn chỉ là một cầu thủ đi bóng \"lố\" mà là một chiến binh thực sự, biết khi nào nên giữ bóng và khi nào phải chuyền cho đồng đội.\n" +
        "\n" +
        "Nhìn lại, sự nghiệp của Mes'Son tại Vins Q12 chính là minh chứng cho sức mạnh của sự kết hợp giữa tài năng cá nhân và sự đoàn kết trong đội bóng. Anh là hình mẫu điển hình của việc một cầu thủ có thể trưởng thành và tỏa sáng khi được hỗ trợ đúng cách.",
      type: "players",
      dateCreated: new Date('2025-03-19T06:50:00'),
      imgUrl: 'news-5.jpg'
    },
    {
      id: 5,
      title: "Cùcù Re Q`uan: \"Từ Hư Vô\" Lên Đỉnh, Lấy Ronaldo Làm Hình Tượng",
      subtitle: "Cùcù Re Quan, đội trưởng của Vins Q12, là minh chứng cho sức mạnh vượt qua mọi khó khăn. Với hình tượng CR7, anh đã không ngừng nỗ lực để trở thành một người lãnh đạo mạnh mẽ và truyền cảm hứng cho đồng đội, từ một cầu thủ vô danh đến ngôi sao sáng giá trong làng bóng đá.",
      content: "Cùcù Re Q`uan, đội trưởng tài ba của Vins Q12, là một trong những ví dụ điển hình cho tinh thần không bao giờ từ bỏ và sự quyết tâm vươn lên từ những khó khăn. Trước khi gia nhập đội bóng, anh chỉ là một cầu thủ vô danh với những thất bại nối tiếp. Tuy nhiên, nhờ vào sự nỗ lực không ngừng nghỉ và học hỏi từ những người đi trước, đặc biệt là hình tượng Cristiano Ronaldo, anh đã vượt qua mọi thử thách để khẳng định bản thân mình.\n" +
        "\n" +
        "“Ronaldo luôn là hình mẫu của tôi, không chỉ vì tài năng mà còn vì tinh thần chiến đấu mạnh mẽ. Anh ấy đã chứng minh rằng không có gì là không thể nếu chúng ta không từ bỏ,” Cùcù Re Q`uan chia sẻ. Chính từ nguồn cảm hứng đó, anh đã xây dựng lối chơi riêng biệt của mình, không chỉ mạnh mẽ trong các pha tranh chấp mà còn luôn là nguồn động lực lớn cho cả đội.\n" +
        "\n" +
        "Trong những năm tháng khoác áo Vins Q12, Cùcù Re Quan đã dần khẳng định mình là một trong những đội trưởng xuất sắc. Anh biết cách dẫn dắt đồng đội không chỉ bằng tài năng mà còn bằng sức mạnh tinh thần, giúp các cầu thủ trẻ học hỏi và phát triển trong môi trường tập thể. Mỗi lần đội bóng gặp khó khăn, Cùcù Re Quan lại là người gương mẫu, đứng lên dẫn dắt và chiến đấu hết mình.\n" +
        "\n" +
        "Sự phát triển vượt bậc của anh cũng chính là minh chứng cho việc không có khó khăn nào là không thể vượt qua nếu ta có quyết tâm. Không chỉ là một cầu thủ xuất sắc, Cùcù Re Q`uan còn là biểu tượng cho sự kiên trì, đam mê và lòng kiên cường – những phẩm chất mà mỗi người trong đội bóng Vins Q12 đều noi theo.\n" +
        "\n" +
        "Với những đóng góp không mệt mỏi, Cùcù Re Q`uan đã và đang là cầu thủ mà bất kỳ ai cũng mong muốn có thể theo kịp, trở thành một phần không thể thiếu trong chiến lược của Vins Q12 và là hình mẫu lý tưởng cho các cầu thủ trẻ.",
      type: "players",
      dateCreated: new Date('2025-03-07T09:53:00'),
      imgUrl: 'news-4-ver2.jpg'
    },
    {
      id: 6,
      title: "Lëv YaBao: Kẻ \"Về Nhì Vĩ Đại\" Tại Giải đấu Cấp Tỉnh (TPHCM)",
      subtitle: "Lëv YaBao, chàng thủ môn từng 2 lần về nhì đầy ấn tượng tại giải cấp tỉnh, đã trở thành trụ cột vững chắc của CLB Vins Q12, không chỉ với khả năng phản xạ xuất sắc mà còn với tinh thần chiến đấu không biết mệt mỏi, luôn là điểm tựa vững chắc cho cả đội.",
      content: "Lëv YaBao, thủ môn nổi bật của CLB Vins Q12, là một trong những câu chuyện thành công đầy cảm hứng cho bất kỳ ai theo đuổi đam mê thể thao. Trước khi gia nhập Vins Q12, YaBao đã để lại dấu ấn tại giải đấu cấp tỉnh TP.HCM với hai lần về nhì đầy ấn tượng. Mặc dù chưa giành được chức vô địch, nhưng những màn trình diễn xuất sắc của anh trong khung thành đã khiến không ít người phải trầm trồ. Khả năng phản xạ nhanh nhạy, cùng sự bình tĩnh trong những tình huống căng thẳng, đã khiến YaBao được đánh giá là một trong những thủ môn xuất sắc nhất ở thời điểm đó.\n" +
        "\n" +
        "“Tôi chưa bao giờ nghĩ đến việc là số một trong tất cả các giải đấu, nhưng mỗi lần tôi ra sân, tôi đều mong muốn là số một trong lòng người hâm mộ và trong đội bóng,” YaBao chia sẻ. Chính với tinh thần không bao giờ bỏ cuộc và khát khao cải thiện bản thân, anh đã không ngừng nỗ lực và chứng minh rằng mình xứng đáng là người bảo vệ khung thành của Vins Q12.\n" +
        "\n" +
        "Sau khi gia nhập Vins Q12, YaBao đã nhanh chóng khẳng định được giá trị của mình. Với tài năng thiên bẩm và sự kiên nhẫn không biết mệt mỏi, anh không chỉ là một thủ môn tài năng mà còn là người đứng đầu trong việc truyền cảm hứng cho đồng đội. Tại CLB, YaBao là tấm gương về sự chuyên nghiệp, luôn thể hiện sự chuẩn mực trong tập luyện và thi đấu. Anh đã trở thành trụ cột vững chắc của đội bóng, là người mà các đồng đội có thể tin tưởng tuyệt đối trong những phút giây quyết định của trận đấu.\n" +
        "\n" +
        "Một trong những điểm mạnh của YaBao không chỉ là khả năng cứu thua mà còn là sự lãnh đạo trong khung thành. Anh luôn biết cách tổ chức hàng phòng ngự, chỉ đạo đồng đội và giữ cho tinh thần đội bóng luôn vững vàng trong mọi tình huống khó khăn. Dưới sự chỉ huy của YaBao, Vins Q12 đã trở thành một đội bóng khó bị đánh bại.\n" +
        "\n" +
        "Với những nỗ lực không ngừng nghỉ, Lëv YaBao đã chứng minh rằng không có gì là không thể, và vị trí thứ hai trong những giải đấu trước đây chỉ là bước đệm để anh vươn lên mạnh mẽ hơn. Anh chính là minh chứng cho việc một cầu thủ có thể trưởng thành và đạt được những thành công lớn khi biết kết hợp giữa tài năng, kỷ luật và tinh thần chiến đấu mãnh liệt.",
      type: "players",
      dateCreated: new Date('2025-03-04T09:53:00Z'),
      imgUrl: 'news-3.jpg'
    },
  ]

  getAllNews() {
    return this.newsList;
  }

  listNewsByMatch() {
    return this.newsList.filter(news =>
      news.type === 'matches'
    )
  }
  listNewsByClub() {
    return this.newsList.filter(news =>
      news.type === 'club'
    )
  }
  listNewsByInterviews() {
    return this.newsList.filter(news =>
      news.type === 'interviews'
    )
  }
  listNewsByOthers() {
    return this.newsList.filter(news =>
      news.type === 'others'
    )
  }
}
