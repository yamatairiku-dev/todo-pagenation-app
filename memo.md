# DBマイグレーション
テーブル作成
npx sequelize-cli db:migrate
テーブルドロップ
npx sequelize-cli db:migrate:undo
# 初期データ投入
npx sequelize-cli db:seed:all