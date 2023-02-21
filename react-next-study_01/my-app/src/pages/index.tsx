const CountryCapitalList = () => {
  return (
    <div>
      <h1>国の首都リスト</h1>
      <div>日本 ... 東京</div>
      <div>アメリカ ... ワシントンD.C.</div>
      <div>中国 ... 北京</div>
      <div>イギリス ... ロンドン</div>
    </div>
  );
};

const PrefectureCapitalList = () => {
  return (
    <div>
      <h1>都道府県庁所在地リスト</h1>
      <div>東京都 ... 新宿区</div>
      <div>北海道 ... 札幌市</div>
      <div>宮城県 ... 仙台市</div>
      <div>愛知県 ... 名古屋市</div>
      <div>大阪府 ... 大阪市</div>
      <div>広島県 ... 広島市</div>
      <div>福岡県 ... 福岡市</div>
    </div>
  );
};

const TopPage = () => {
  return (
    <div>
      <CountryCapitalList />
      <PrefectureCapitalList />       
  </div>
  );
};
export default TopPage;