import { useState } from "react";

/**
 * 长度24个字
 * iphone12 一行 14 个字
*/
const defaultQuote = [
  `成为一个专家要10000小时 <br /> 掌握一个东西只需要20小时`,
  `先做五分钟 <br /> 再说行不行`,
  `我们要创造一个属于自己的 <br /> 充满意义的人生`,
  `不要太把自己当一回事 <br /> 要把自己做的事情当一回事`,
  `我们一定是毁灭于 <br /> 我们所热爱的东西`,
  `随心所欲不逾矩`,
  `成功秘诀： <br /> 喜欢上自己从事的工作`,
  `一次只做一件事 <br /> 做一个单线程的人`,
  `遵守自己定的规矩 <br /> 没有规矩，不成方圆`,
  `你要弄清楚自己的目标，动力减弱时，提醒自己为什么做这件事`,
  `有多少人败给了“荷花定律”？`,
  `这件事情是想教会我什么？`,
  `没有孤独做不了大事`,
  `打日志了吗？google了吗？读文档了吗？`,
  `如果躺平给我带来的是不安和焦虑，我宁愿不要`,
  `今天不学习 <br/> 明天变垃圾`,
  `卷累了就躺，躺累了再卷 <br /> 快乐的仰卧起坐`,
  `每一次上台 <br /> 都是要变的更强`,
  `↗️自信↘️ <br /> ↖️成功↙️`,
  `比起向阳而生 <br /> 我更愿意尝试逆风翻盘`,
  `不要被20%的KPI <br /> 限制了100%的创造力`,
  `保留更多可能性 <br /> 为创新留下空间`,
  `婚姻外喜欢是天性 <br /> 婚姻里忠诚是选择`,
  `会道歉才是真男人`,
  `不管什么爱好，加上KPI之后都会变的索然无味`,
  `工作永远干不完 <br /> 认真做好每一件事`,
  `成长不是变强，而是填坑。`,
]

const randomSort = arr => arr.sort(() => Math.random() - 0.5);

const useQuotes = () => {
  // const [quotes, setQuotes] = useState(defaultQuote);
  const [quotes, setQuotes] = useState(randomSort(defaultQuote));

  return { quotes, setQuotes };
}

export default useQuotes;
