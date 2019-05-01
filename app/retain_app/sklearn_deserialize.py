import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn import preprocessing
from sklearn.externals import joblib
import codecs

MODEL_FILE_NAME = 'pickle_model.sav'
WATT_DATA = "./csv/juyo-2016.csv"
TEMP_DATA = "./csv/data_1.csv"


#説明変数を読み込む
# 電力データの読み込み
with codecs.open(WATT_DATA, "r", "Shift-JIS", "ignore") as file:
    kw_df = pd.read_csv(file, delimiter=",")
# 気温データの読み込み
with codecs.open(TEMP_DATA, "r", "Shift-JIS", "ignore") as file:
    temp_df = pd.read_csv(file, delimiter=",")
# データの結合
df = kw_df
df["気温"] = temp_df["気温(℃)"]
# 曜日データの取得
import datetime
pp = df["DATE"]
tmp = []
for i in range(len(pp)):
    d = datetime.datetime.strptime(pp[i], "%Y/%m/%d")
    tmp.append(d.weekday())
df["weekday"] = tmp
# 時間データの取得
pp = df["TIME"]
tmp = []
for i in range(len(pp)):
    d = datetime.datetime.strptime(pp[i], "%H:%M")
    tmp.append(d.hour)
df["hour"] = tmp
# 入力
pp = df[["気温","weekday","hour"]]
X = pp.values.astype('float')
# 出力
pp = df["実績(万kW)"]
y = pp.values.flatten()
# クロスバリデーションのモジュールを読み込む
from sklearn import model_selection
# ラベル付きデータをトレーニングセット (X_train, y_train)とテストセット (X_test, y_test)に分割
X_train, X_test, y_train, y_test = model_selection.train_test_split(X, y, test_size=.2, random_state=42)
# 正規化のモジュールを読み込む
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
scaler.fit(X_train)
X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)


# pickleを使用
import pickle
model = pickle.load(open(MODEL_FILE_NAME, 'rb'))

# 計算制度
print(model.score(X_test,y_test))

# テスト結果の表示
result = model.predict(X_test)


result.shape

for d in result:
    print(d)
