# A++

## Commit Prefix

### ルール
| type                  | emoji |
|-----------------------|:-----:|
| 機能追加、更新(update)       |  🔧   |
| バグ修正（fix)             |  🐛   |
| リファクタリング(refactoring) |  ♻️   |
| メモ(memo)              |  📝   |

### コミットメッセージの適用
```shell
$ cd <project>
$ cp .gitmessage.txt.example .gitmessage.txt
$ git config commit.template .gitmessage.txt
$ git config --add commit.cleanup strip
```


## TODO
- reg/step1、step2のタブレットのレスポンシブが色々壊れていた レイアウトが崩れている
- スマホ、ログインページのレイアウト
    - 誕生日は横長になっている
- パスワードリセットまわりのレイアウト調整
- マイページ preview画面 作成
- js分けたやつ実装