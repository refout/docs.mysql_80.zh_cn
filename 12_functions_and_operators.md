# 12 Functions and Operators

> [原文](https://dev.mysql.com/doc/refman/8.0/en/functions.html)

## [12.1 Built-In Function and Operator Reference](https://dev.mysql.com/doc/refman/8.0/en/built-in-function-reference.html)

## [12.2 Loadable Function Reference](https://dev.mysql.com/doc/refman/8.0/en/loadable-function-reference.html)

## [12.3 Type Conversion in Expression Evaluation](https://dev.mysql.com/doc/refman/8.0/en/type-conversion.html)

## [12.4 Operators](https://dev.mysql.com/doc/refman/8.0/en/non-typed-operators.html)

## [12.5 Flow Control Functions](https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html)

## [12.6 Numeric Functions and Operators](https://dev.mysql.com/doc/refman/8.0/en/numeric-functions.html)

## [12.7 Date and Time Functions](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html)

## 12.8 字符串函数和运算符

> [原文](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html)

> Table 12.12 字符串函数和运算符

| 名称                              | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| [`ASCII()`](<#ASCII(`str`)>)      | 返回字符串最左边字符的ASCII码十进制值                        |
| [`BIN()`](<#BIN()>)               | 返回数字的二进制的字符串表示形式                             |
| [`BIT_LENGTH()`](<#BIT_LENGTH()>) | 返回参数的长度（单位：bit）                                  |
| [`CHAR()`](<#CHAR()>)             | 返回传递的每个整数参数所对应的字符                           |
| [`CHAR_LENGTH()`]()               | Return number of characters in argument                      |
| [`CHARACTER_LENGTH()`]()          | Synonym for CHAR_LENGTH()                                    |
| [`CONCAT()`]()                    | Return concatenated string                                   |
| [`CONCAT_WS()`]()                 | Return concatenate with separator                            |
| [`ELT()`]()                       | Return string at index number                                |
| [`EXPORT_SET()`]()                | Return a string such that for every bit set in the value bits, you get an on string and for every unset bit, you get an off string |
| [`FIELD()`]()                     | Index (position) of first argument in subsequent arguments   |
| [`FIND_IN_SET()`]()               | Index (position) of first argument within second argument    |
| [`FORMAT()`]()                    | Return a number formatted to specified number of decimal places |
| [`FROM_BASE64()`]()               | Decode base64 encoded string and return result               |
| [`HEX()`]()                       | Hexadecimal representation of decimal or string value        |
| [`INSERT()`]()                    | Insert substring at specified position up to specified number of characters |
| [`INSTR()`]()                     | Return the index of the first occurrence of substring        |
| [`LCASE()`]()                     | Synonym for LOWER()                                          |
| [`LEFT()`]()                      | Return the leftmost number of characters as specified        |
| [`LENGTH()`]()                    | Return the length of a string in bytes                       |
| [`LIKE`]()                        | Simple pattern matching                                      |
| [`LOAD_FILE()`]()                 | Load the named file                                          |
| [`LOCATE()`]()                    | Return the position of the first occurrence of substring     |
| [`LOWER()`]()                     | Return the argument in lowercase                             |
| [`LPAD()`]()                      | Return the string argument, left-padded with the specified string |
| [`LTRIM()`]()                     | Remove leading spaces                                        |
| [`MAKE_SET()`]()                  | Return a set of comma-separated strings that have the corresponding bit in bits set |
| [`MATCH()`]()                     | Perform full-text search                                     |
| [`MID()`]()                       | Return a substring starting from the specified position      |
| [`NOT LIKE`]()                    | Negation of simple pattern matching                          |
| [`NOT REGEXP`]()                  | Negation of REGEXP                                           |
| [`OCT()`]()                       | Return a string containing octal representation of a number  |
| [`OCTET_LENGTH()`]()              | Synonym for LENGTH()                                         |
| [`ORD()`]()                       | Return character code for leftmost character of the argument |
| [`POSITION()`]()                  | Synonym for LOCATE()                                         |
| [`QUOTE()`]()                     | Escape the argument for use in an SQL statement              |
| [`REGEXP`]()                      | Whether string matches regular expression                    |
| [`REGEXP_INSTR()`]()              | Starting index of substring matching regular expression      |
| [`REGEXP_LIKE()`]()               | Whether string matches regular expression                    |
| [`REGEXP_REPLACE()`]()            | Replace substrings matching regular expression               |
| [`REGEXP_SUBSTR()`]()             | Return substring matching regular expression                 |
| [`REPEAT()`]()                    | Repeat a string the specified number of times                |
| [`REPLACE()`]()                   | Replace occurrences of a specified string                    |
| [`REVERSE()`]()                   | Reverse the characters in a string                           |
| [`RIGHT()`]()                     | Return the specified rightmost number of characters          |
| [`RLIKE`]()                       | Whether string matches regular expression                    |
| [`RPAD()`]()                      | Append string the specified number of times                  |
| [`RTRIM()`]()                     | Remove trailing spaces                                       |
| [`SOUNDEX()`]()                   | Return a soundex string                                      |
| [`SOUNDS LIKE`]()                 | Compare sounds                                               |
| [`SPACE()`]()                     | Return a string of the specified number of spaces            |
| [`STRCMP()`]()                    | Compare two strings                                          |
| [`SUBSTR()`]()                    | Return the substring as specified                            |
| [`SUBSTRING()`]()                 | Return the substring as specified                            |
| [`SUBSTRING_INDEX()`]()           | Return a substring from a string before the specified number of occurrences of the delimiter |
| [`TO_BASE64()`]()                 | Return the argument converted to a base-64 string            |
| [`TRIM()`]()                      | Remove leading and trailing spaces                           |
| [`UCASE()`]()                     | Synonym for UPPER()                                          |
| [`UNHEX()`]()                     | Return a string containing hex representation of a number    |
| [`UPPER()`]()                     | Convert to uppercase                                         |
| [`WEIGHT_STRING()`]()             | Return the weight string for a string                        |

如果结果长度大于系统变量 `max_allowed_packet` 的值，则字符串函数返回 `NULL` 。参见[5.1.1 配置服务器](<5_mysql_server_administration.md#5.1.1 配置服务器>)。

对于操作字符串位置的函数，第一个位置编号为 1。

对于带长度参数的函数，非整数参数四舍五入为最接近的整数。

### ASCII(`str`)

返回字符串 `str` 最左边的字符的 ASCII 十进制值。如果 `str` 为空字符串则返回 `0` 。如果 _`str`_ 是 `NULL` 则返回 `NULL` 。`ASCII()` 适用于 8 位字符

``` sql
mysql> SELECT ASCII('2');
        -> 50
mysql> SELECT ASCII(2);
        -> 50
mysql> SELECT ASCII('d');
        -> 100
mysql> SELECT ASCII('dx');
        -> 100
mysql> select ASCII(NULL);
        -> NULL
mysql> select ASCII('');
        -> 0
```

另见 [`ORD()`](12_functions_and_operators.md#ORD(_str_)) 函数。

- [`BIN(`N`)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_bin)

  Returns a string representation of the binary value of _`N`_, where _`N`_ is a
  longlong ([`BIGINT`](https://dev.mysql.com/doc/refman/8.0/en/integer-types.html)) number. This is equivalent
  to [`CONV(*`N`*,10,2)`](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_conv).
  Returns `NULL` if _`N`_ is `NULL`.

  ```sql
  mysql> SELECT BIN(12);
          -> '1100'
  ```

- [`BIT_LENGTH(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_bit-length)

  Returns the length of the string _`str`_ in bits.

  ```sql
  mysql> SELECT BIT_LENGTH('text');
          -> 32
  ```

- [`CHAR(*`N`*,... [USING *`charset_name`*\])`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char)

  [`CHAR()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char) interprets each argument _`N`_
  as an integer and returns a string consisting of the characters given by the code values of those integers. `NULL`
  values are skipped.

  ```sql
  mysql> SELECT CHAR(77,121,83,81,'76');
          -> 'MySQL'
  mysql> SELECT CHAR(77,77.3,'77.3');
          -> 'MMM'
  ```

  [`CHAR()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char) arguments larger than 255 are
  converted into multiple result bytes. For
  example, [`CHAR(256)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char) is equivalent
  to [`CHAR(1,0)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char),
  and [`CHAR(256*256)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char) is equivalent
  to [`CHAR(1,0,0)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char):

  ```sql
  mysql> SELECT HEX(CHAR(1,0)), HEX(CHAR(256));
  +----------------+----------------+
  | HEX(CHAR(1,0)) | HEX(CHAR(256)) |
  +----------------+----------------+
  | 0100           | 0100           |
  +----------------+----------------+
  mysql> SELECT HEX(CHAR(1,0,0)), HEX(CHAR(256*256));
  +------------------+--------------------+
  | HEX(CHAR(1,0,0)) | HEX(CHAR(256*256)) |
  +------------------+--------------------+
  | 010000           | 010000             |
  +------------------+--------------------+
  ```

  By default, [`CHAR()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char) returns a binary
  string. To produce a string in a given character set, use the optional `USING` clause:

  ```sql
  mysql> SELECT CHARSET(CHAR(X'65')), CHARSET(CHAR(X'65' USING utf8));
  +----------------------+---------------------------------+
  | CHARSET(CHAR(X'65')) | CHARSET(CHAR(X'65' USING utf8)) |
  +----------------------+---------------------------------+
  | binary               | utf8                            |
  +----------------------+---------------------------------+
  ```

  If `USING` is given and the result string is illegal for the given character set, a warning is issued. Also, if strict
  SQL mode is enabled, the result
  from [`CHAR()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char) becomes `NULL`.

  If [`CHAR()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char) is invoked from within
  the [**mysql**](https://dev.mysql.com/doc/refman/8.0/en/mysql.html) client, binary strings display using hexadecimal
  notation, depending on the value of
  the [`--binary-as-hex`](https://dev.mysql.com/doc/refman/8.0/en/mysql-command-options.html#option_mysql_binary-as-hex)
  . For more information about that option,
  see [Section 4.5.1, “mysql — The MySQL Command-Line Client”](https://dev.mysql.com/doc/refman/8.0/en/mysql.html).

- [`CHAR_LENGTH(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char-length)

  Returns the length of the string _`str`_, measured in characters. A multibyte character counts as a single character.
  This means that for a string containing five 2-byte
  characters, [`LENGTH()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_length) returns `10`,
  whereas [`CHAR_LENGTH()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char-length)
  returns `5`.

- [`CHARACTER_LENGTH(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_character-length)

  [`CHARACTER_LENGTH()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_character-length) is a
  synonym for [`CHAR_LENGTH()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char-length).

- [`CONCAT(*`str1`*,*`str2`*,...)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_concat)

  Returns the string that results from concatenating the arguments. May have one or more arguments. If all arguments are
  nonbinary strings, the result is a nonbinary string. If the arguments include any binary strings, the result is a
  binary string. A numeric argument is converted to its equivalent nonbinary string form.

  [`CONCAT()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_concat) returns `NULL` if any
  argument is `NULL`.

  ```sql
  mysql> SELECT CONCAT('My', 'S', 'QL');
          -> 'MySQL'
  mysql> SELECT CONCAT('My', NULL, 'QL');
          -> NULL
  mysql> SELECT CONCAT(14.3);
          -> '14.3'
  ```

  For quoted strings, concatenation can be performed by placing the strings next to each other:

  ```sql
  mysql> SELECT 'My' 'S' 'QL';
          -> 'MySQL'
  ```

  If [`CONCAT()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_concat) is invoked from within
  the [**mysql**](https://dev.mysql.com/doc/refman/8.0/en/mysql.html) client, binary string results display using
  hexadecimal notation, depending on the value of
  the [`--binary-as-hex`](https://dev.mysql.com/doc/refman/8.0/en/mysql-command-options.html#option_mysql_binary-as-hex)
  . For more information about that option,
  see [Section 4.5.1, “mysql — The MySQL Command-Line Client”](https://dev.mysql.com/doc/refman/8.0/en/mysql.html).

- [`CONCAT_WS(*`separator`*,*`str1`*,*`str2`*,...)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_concat-ws)

  [`CONCAT_WS()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_concat-ws) stands for
  Concatenate With Separator and is a special form
  of [`CONCAT()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_concat). The first argument is
  the separator for the rest of the arguments. The separator is added between the strings to be concatenated. The
  separator can be a string, as can the rest of the arguments. If the separator is `NULL`, the result is `NULL`.

  ```sql
  mysql> SELECT CONCAT_WS(',','First name','Second name','Last Name');
          -> 'First name,Second name,Last Name'
  mysql> SELECT CONCAT_WS(',','First name',NULL,'Last Name');
          -> 'First name,Last Name'
  ```

  [`CONCAT_WS()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_concat-ws) does not skip empty
  strings. However, it does skip any `NULL` values after the separator argument.

- [`ELT(*`N`*,*`str1`*,*`str2`*,*`str3`*,...)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_elt)

  [`ELT()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_elt) returns the *`N`*th element of
  the list of strings: _`str1`_ if _`N`_ = `1`, _`str2`_ if _`N`_ = `2`, and so on. Returns `NULL` if _`N`_ is less
  than `1` or greater than the number of
  arguments. [`ELT()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_elt) is the complement
  of [`FIELD()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_field).

  ```sql
  mysql> SELECT ELT(1, 'Aa', 'Bb', 'Cc', 'Dd');
          -> 'Aa'
  mysql> SELECT ELT(4, 'Aa', 'Bb', 'Cc', 'Dd');
          -> 'Dd'
  ```

- [`EXPORT_SET(*`bits`*,*`on`*,*`off`*[,*`separator`*[,*`number_of_bits`*\]])`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_export-set)

  Returns a string such that for every bit set in the value _`bits`_, you get an _`on`_ string and for every bit not set
  in the value, you get an _`off`_ string. Bits in _`bits`_ are examined from right to left (from low-order to
  high-order bits). Strings are added to the result from left to right, separated by the _`separator`_ string (the
  default being the comma character `,`). The number of bits examined is given by _`number_of_bits`_, which has a
  default of 64 if not specified. _`number_of_bits`_ is silently clipped to 64 if larger than 64. It is treated as an
  unsigned integer, so a value of −1 is effectively the same as 64.

  ```sql
  mysql> SELECT EXPORT_SET(5,'Y','N',',',4);
          -> 'Y,N,Y,N'
  mysql> SELECT EXPORT_SET(6,'1','0',',',10);
          -> '0,1,1,0,0,0,0,0,0,0'
  ```

- [`FIELD(*`str`*,*`str1`*,*`str2`*,*`str3`*,...)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_field)

  Returns the index (position) of _`str`_ in the _`str1`_, _`str2`_, _`str3`_, `...` list. Returns `0` if _`str`_ is not
  found.

  If all arguments to [`FIELD()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_field) are
  strings, all arguments are compared as strings. If all arguments are numbers, they are compared as numbers. Otherwise,
  the arguments are compared as double.

  If _`str`_ is `NULL`, the return value is `0` because `NULL` fails equality comparison with any
  value. [`FIELD()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_field) is the complement
  of [`ELT()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_elt).

  ```sql
  mysql> SELECT FIELD('Bb', 'Aa', 'Bb', 'Cc', 'Dd', 'Ff');
          -> 2
  mysql> SELECT FIELD('Gg', 'Aa', 'Bb', 'Cc', 'Dd', 'Ff');
          -> 0
  ```

- [`FIND_IN_SET(*`str`*,*`strlist`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_find-in-set)

  Returns a value in the range of 1 to _`N`_ if the string _`str`_ is in the string list _`strlist`_ consisting of _`N`_
  substrings. A string list is a string composed of substrings separated by `,` characters. If the first argument is a
  constant string and the second is a column of type [`SET`](https://dev.mysql.com/doc/refman/8.0/en/set.html),
  the [`FIND_IN_SET()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_find-in-set) function is
  optimized to use bit arithmetic. Returns `0` if _`str`_ is not in _`strlist`_ or if _`strlist`_ is the empty string.
  Returns `NULL` if either argument is `NULL`. This function does not work properly if the first argument contains a
  comma (`,`) character.

  ```sql
  mysql> SELECT FIND_IN_SET('b','a,b,c,d');
          -> 2
  ```

- [`FORMAT(*`X`*,*`D`*[,*`locale`*\])`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_format)

  Formats the number _`X`_ to a format like `'#,###,###.##'`, rounded to _`D`_ decimal places, and returns the result as
  a string. If _`D`_ is `0`, the result has no decimal point or fractional part.

  The optional third parameter enables a locale to be specified to be used for the result number's decimal point,
  thousands separator, and grouping between separators. Permissible locale values are the same as the legal values for
  the [`lc_time_names`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lc_time_names)
  system variable (
  see [Section 10.16, “MySQL Server Locale Support”](https://dev.mysql.com/doc/refman/8.0/en/locale-support.html)). If
  no locale is specified, the default is `'en_US'`.

  ```sql
  mysql> SELECT FORMAT(12332.123456, 4);
          -> '12,332.1235'
  mysql> SELECT FORMAT(12332.1,4);
          -> '12,332.1000'
  mysql> SELECT FORMAT(12332.2,0);
          -> '12,332'
  mysql> SELECT FORMAT(12332.2,2,'de_DE');
          -> '12.332,20'
  ```

- [`FROM_BASE64(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_from-base64)

  Takes a string encoded with the base-64 encoded rules used
  by [`TO_BASE64()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_to-base64) and returns the
  decoded result as a binary string. The result is `NULL` if the argument is `NULL` or not a valid base-64 string. See
  the description of [`TO_BASE64()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_to-base64)
  for details about the encoding and decoding rules.

  ```sql
  mysql> SELECT TO_BASE64('abc'), FROM_BASE64(TO_BASE64('abc'));
          -> 'JWJj', 'abc'
  ```

  If [`FROM_BASE64()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_from-base64) is invoked
  from within the [**mysql**](https://dev.mysql.com/doc/refman/8.0/en/mysql.html) client, binary strings display using
  hexadecimal notation, depending on the value of
  the [`--binary-as-hex`](https://dev.mysql.com/doc/refman/8.0/en/mysql-command-options.html#option_mysql_binary-as-hex)
  . For more information about that option,
  see [Section 4.5.1, “mysql — The MySQL Command-Line Client”](https://dev.mysql.com/doc/refman/8.0/en/mysql.html).

- [`HEX(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_hex)
  , [`HEX(*`N`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_hex)

  For a string argument _`str`_, [`HEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_hex)
  returns a hexadecimal string representation of _`str`_ where each byte of each character in _`str`_ is converted to
  two hexadecimal digits. (Multibyte characters therefore become more than two digits.) The inverse of this operation is
  performed by the [`UNHEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_unhex) function.

  For a numeric argument _`N`_, [`HEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_hex)
  returns a hexadecimal string representation of the value of _`N`_ treated as a
  longlong ([`BIGINT`](https://dev.mysql.com/doc/refman/8.0/en/integer-types.html)) number. This is equivalent
  to [`CONV(*`N`*,10,16)`](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_conv). The
  inverse of this operation is performed
  by [`CONV(HEX(*`N`*),16,10)`](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_conv).

  ```sql
  mysql> SELECT X'616263', HEX('abc'), UNHEX(HEX('abc'));
          -> 'abc', 616263, 'abc'
  mysql> SELECT HEX(255), CONV(HEX(255),16,10);
          -> 'FF', 255
  ```

- [`INSERT(*`str`*,*`pos`*,*`len`*,*`newstr`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_insert)

  Returns the string _`str`_, with the substring beginning at position _`pos`_ and _`len`_ characters long replaced by
  the string _`newstr`_. Returns the original string if _`pos`_ is not within the length of the string. Replaces the
  rest of the string from position _`pos`_ if _`len`_ is not within the length of the rest of the string. Returns `NULL`
  if any argument is `NULL`.

  ```sql
  mysql> SELECT INSERT('Quadratic', 3, 4, 'What');
          -> 'QuWhattic'
  mysql> SELECT INSERT('Quadratic', -1, 4, 'What');
          -> 'Quadratic'
  mysql> SELECT INSERT('Quadratic', 3, 100, 'What');
          -> 'QuWhat'
  ```

  This function is multibyte safe.

- [`INSTR(*`str`*,*`substr`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_instr)

  Returns the position of the first occurrence of substring _`substr`_ in string _`str`_. This is the same as the
  two-argument form of [`LOCATE()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_locate),
  except that the order of the arguments is reversed.

  ```sql
  mysql> SELECT INSTR('foobarbar', 'bar');
          -> 4
  mysql> SELECT INSTR('xbar', 'foobar');
          -> 0
  ```

  This function is multibyte safe, and is case-sensitive only if at least one argument is a binary string.

- [`LCASE(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lcase)

  [`LCASE()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lcase) is a synonym
  for [`LOWER()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lower).

  `LCASE()` used in a view is rewritten as `LOWER()` when storing the view's definition. (Bug #12844279)

- [`LEFT(*`str`*,*`len`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_left)

  Returns the leftmost _`len`_ characters from the string _`str`_, or `NULL` if any argument is `NULL`.

  ```sql
  mysql> SELECT LEFT('foobarbar', 5);
          -> 'fooba'
  ```

  This function is multibyte safe.

- [`LENGTH(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_length)

  Returns the length of the string _`str`_, measured in bytes. A multibyte character counts as multiple bytes. This
  means that for a string containing five 2-byte
  characters, [`LENGTH()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_length) returns `10`,
  whereas [`CHAR_LENGTH()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char-length)
  returns `5`.

  ```sql
  mysql> SELECT LENGTH('text');
          -> 4
  ```

  Note

  The `Length()` OpenGIS spatial function is
  named [`ST_Length()`](https://dev.mysql.com/doc/refman/8.0/en/gis-linestring-property-functions.html#function_st-length)
  in MySQL.

- [`LOAD_FILE(*`file_name`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_load-file)

  Reads the file and returns the file contents as a string. To use this function, the file must be located on the server
  host, you must specify the full path name to the file, and you must have
  the [`FILE`](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_file) privilege. The file must be
  readable by the server and its size less
  than [`max_allowed_packet`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_allowed_packet)
  bytes. If
  the [`secure_file_priv`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_secure_file_priv)
  system variable is set to a nonempty directory name, the file to be loaded must be located in that directory. (Prior
  to MySQL 8.0.17, the file must be readable by all, not just readable by the server.)

  If the file does not exist or cannot be read because one of the preceding conditions is not satisfied, the function
  returns `NULL`.

  The [`character_set_filesystem`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_character_set_filesystem)
  system variable controls interpretation of file names that are given as literal strings.

  ```sql
  mysql> UPDATE t
              SET blob_col=LOAD_FILE('/tmp/picture')
              WHERE id=1;
  ```

- [`LOCATE(*`substr`*,*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_locate)
  , [`LOCATE(*`substr`*,*`str`*,*`pos`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_locate)

  The first syntax returns the position of the first occurrence of substring _`substr`_ in string _`str`_. The second
  syntax returns the position of the first occurrence of substring _`substr`_ in string _`str`_, starting at
  position _`pos`_. Returns `0` if _`substr`_ is not in _`str`_. Returns `NULL` if any argument is `NULL`.

  ```sql
  mysql> SELECT LOCATE('bar', 'foobarbar');
          -> 4
  mysql> SELECT LOCATE('xbar', 'foobar');
          -> 0
  mysql> SELECT LOCATE('bar', 'foobarbar', 5);
          -> 7
  ```

  This function is multibyte safe, and is case-sensitive only if at least one argument is a binary string.

- [`LOWER(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lower)

  Returns the string _`str`_ with all characters changed to lowercase according to the current character set mapping.
  The default is `utf8mb4`.

  ```sql
  mysql> SELECT LOWER('QUADRATICALLY');
          -> 'quadratically'
  ```

  [`LOWER()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lower) (
  and [`UPPER()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_upper)) are ineffective when
  applied to binary strings ([`BINARY`](https://dev.mysql.com/doc/refman/8.0/en/binary-varbinary.html)
  , [`VARBINARY`](https://dev.mysql.com/doc/refman/8.0/en/binary-varbinary.html)
  , [`BLOB`](https://dev.mysql.com/doc/refman/8.0/en/blob.html)). To perform lettercase conversion of a binary string,
  first convert it to a nonbinary string using a character set appropriate for the data stored in the string:

  ```sql
  mysql> SET @str = BINARY 'New York';
  mysql> SELECT LOWER(@str), LOWER(CONVERT(@str USING utf8mb4));
  +-------------+------------------------------------+
  | LOWER(@str) | LOWER(CONVERT(@str USING utf8mb4)) |
  +-------------+------------------------------------+
  | New York    | new york                           |
  +-------------+------------------------------------+
  ```

  For collations of Unicode character
  sets, [`LOWER()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lower)
  and [`UPPER()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_upper) work according to the
  Unicode Collation Algorithm (UCA) version in the collation name, if there is one, and UCA 4.0.0 if no version is
  specified. For example, `utf8mb4_0900_ai_ci` and `utf8_unicode_520_ci` work according to UCA 9.0.0 and 5.2.0,
  respectively, whereas `utf8_unicode_ci` works according to UCA 4.0.0.
  See [Section 10.10.1, “Unicode Character Sets”](https://dev.mysql.com/doc/refman/8.0/en/charset-unicode-sets.html).

  This function is multibyte safe.

  `LCASE()` used within views is rewritten as `LOWER()`.

- [`LPAD(*`str`*,*`len`*,*`padstr`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lpad)

  Returns the string _`str`_, left-padded with the string _`padstr`_ to a length of _`len`_ characters. If _`str`_ is
  longer than _`len`_, the return value is shortened to _`len`_ characters.

  ```sql
  mysql> SELECT LPAD('hi',4,'??');
          -> '??hi'
  mysql> SELECT LPAD('hi',1,'??');
          -> 'h'
  ```

- [`LTRIM(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ltrim)

  Returns the string _`str`_ with leading space characters removed.

  ```sql
  mysql> SELECT LTRIM('  barbar');
          -> 'barbar'
  ```

  This function is multibyte safe.

- [`MAKE_SET(*`bits`*,*`str1`*,*`str2`*,...)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_make-set)

  Returns a set value (a string containing substrings separated by `,` characters) consisting of the strings that have
  the corresponding bit in _`bits`_ set. _`str1`_ corresponds to bit 0, _`str2`_ to bit 1, and so on. `NULL` values
  in _`str1`_, _`str2`_, `...` are not appended to the result.

  ```sql
  mysql> SELECT MAKE_SET(1,'a','b','c');
          -> 'a'
  mysql> SELECT MAKE_SET(1 | 4,'hello','nice','world');
          -> 'hello,world'
  mysql> SELECT MAKE_SET(1 | 4,'hello','nice',NULL,'world');
          -> 'hello'
  mysql> SELECT MAKE_SET(0,'a','b','c');
          -> ''
  ```

- [`MID(*`str`*,*`pos`*,*`len`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_mid)

  [`MID(*`str`*,*`pos`*,*`len`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_mid) is a
  synonym
  for [`SUBSTRING(*`str`*,*`pos`*,*`len`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring)
  .

- [`OCT(*`N`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_oct)

  Returns a string representation of the octal value of _`N`_, where _`N`_ is a
  longlong ([`BIGINT`](https://dev.mysql.com/doc/refman/8.0/en/integer-types.html)) number. This is equivalent
  to [`CONV(*`N`*,10,8)`](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_conv).
  Returns `NULL` if _`N`_ is `NULL`.

  ```sql
  mysql> SELECT OCT(12);
          -> '14'
  ```

- [`OCTET_LENGTH(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_octet-length)

  [`OCTET_LENGTH()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_octet-length) is a synonym
  for [`LENGTH()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_length).

  ### ORD(_str_)

  If the leftmost character of the string _`str`_ is a multibyte character, returns the code for that character,
  calculated from the numeric values of its constituent bytes using this formula:

  ```clike
    (1st byte code)
  + (2nd byte code * 256)
  + (3rd byte code * 256^2) ...
  ```

  If the leftmost character is not a multibyte
  character, [`ORD()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ord) returns the same
  value as the [`ASCII()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ascii) function.

  ```sql
  mysql> SELECT ORD('2');
          -> 50
  ```

- [`POSITION(*`substr`* IN *`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_position)

  [`POSITION(*`substr`* IN *`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_position)
  is a synonym
  for [`LOCATE(*`substr`*,*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_locate).

- [`QUOTE(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_quote)

  Quotes a string to produce a result that can be used as a properly escaped data value in an SQL statement. The string
  is returned enclosed by single quotation marks and with each instance of backslash (`\`), single quote (`'`),
  ASCII `NUL`, and Control+Z preceded by a backslash. If the argument is `NULL`, the return value is the word “NULL”
  without enclosing single quotation marks.

  ```sql
  mysql> SELECT QUOTE('Don\'t!');
          -> 'Don\'t!'
  mysql> SELECT QUOTE(NULL);
          -> NULL
  ```

  For comparison, see the quoting rules for literal strings and within the C API
  in [Section 9.1.1, “String Literals”](https://dev.mysql.com/doc/refman/8.0/en/string-literals.html),
  and [mysql_real_escape_string_quote()](https://dev.mysql.com/doc/c-api/8.0/en/mysql-real-escape-string-quote.html).

- [`REPEAT(*`str`*,*`count`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_repeat)

  Returns a string consisting of the string _`str`_ repeated _`count`_ times. If _`count`_ is less than 1, returns an
  empty string. Returns `NULL` if _`str`_ or _`count`_ are `NULL`.

  ```sql
  mysql> SELECT REPEAT('MySQL', 3);
          -> 'MySQLMySQLMySQL'
  ```

- [`REPLACE(*`str`*,*`from_str`*,*`to_str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_replace)

  Returns the string _`str`_ with all occurrences of the string _`from_str`_ replaced by the string _`to_str`_
  . [`REPLACE()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_replace) performs a
  case-sensitive match when searching for _`from_str`_.

  ```sql
  mysql> SELECT REPLACE('www.mysql.com', 'w', 'Ww');
          -> 'WwWwWw.mysql.com'
  ```

  This function is multibyte safe.

- [`REVERSE(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_reverse)

  Returns the string _`str`_ with the order of the characters reversed.

  ```sql
  mysql> SELECT REVERSE('abc');
          -> 'cba'
  ```

  This function is multibyte safe.

- [`RIGHT(*`str`*,*`len`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_right)

  Returns the rightmost _`len`_ characters from the string _`str`_, or `NULL` if any argument is `NULL`.

  ```sql
  mysql> SELECT RIGHT('foobarbar', 4);
          -> 'rbar'
  ```

  This function is multibyte safe.

- [`RPAD(*`str`*,*`len`*,*`padstr`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_rpad)

  Returns the string _`str`_, right-padded with the string _`padstr`_ to a length of _`len`_ characters. If _`str`_ is
  longer than _`len`_, the return value is shortened to _`len`_ characters.

  ```sql
  mysql> SELECT RPAD('hi',5,'?');
          -> 'hi???'
  mysql> SELECT RPAD('hi',1,'?');
          -> 'h'
  ```

  This function is multibyte safe.

- [`RTRIM(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_rtrim)

  Returns the string _`str`_ with trailing space characters removed.

  ```sql
  mysql> SELECT RTRIM('barbar   ');
          -> 'barbar'
  ```

  This function is multibyte safe.

- [`SOUNDEX(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_soundex)

  Returns a soundex string from _`str`_. Two strings that sound almost the same should have identical soundex strings. A
  standard soundex string is four characters long, but
  the [`SOUNDEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_soundex) function returns an
  arbitrarily long string. You can
  use [`SUBSTRING()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring) on the result to
  get a standard soundex string. All nonalphabetic characters in _`str`_ are ignored. All international alphabetic
  characters outside the A-Z range are treated as vowels.

  Important

  When using [`SOUNDEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_soundex), you should
  be aware of the following limitations:

    - This function, as currently implemented, is intended to work well with strings that are in the English language
      only. Strings in other languages may not produce reliable results.
    - This function is not guaranteed to provide consistent results with strings that use multibyte character sets,
      including `utf-8`. See Bug #22638 for more information.

  ```sql
  mysql> SELECT SOUNDEX('Hello');
          -> 'H400'
  mysql> SELECT SOUNDEX('Quadratically');
          -> 'Q36324'
  ```

  Note

  This function implements the original Soundex algorithm, not the more popular enhanced version (also described by D.
  Knuth). The difference is that original version discards vowels first and duplicates second, whereas the enhanced
  version discards duplicates first and vowels second.

- [`*`expr1`* SOUNDS LIKE *`expr2`*`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#operator_sounds-like)

  This is the same
  as [`SOUNDEX(*`expr1`*) = SOUNDEX(*`expr2`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_soundex)
  .

- [`SPACE(*`N`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_space)

  Returns a string consisting of _`N`_ space characters.

  ```sql
  mysql> SELECT SPACE(6);
          -> '      '
  ```

- [`SUBSTR(*`str`*,*`pos`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substr)
  , [`SUBSTR(*`str`* FROM *`pos`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substr)
  , [`SUBSTR(*`str`*,*`pos`*,*`len`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substr)
  , [`SUBSTR(*`str`* FROM *`pos`* FOR *`len`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substr)

  [`SUBSTR()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substr) is a synonym
  for [`SUBSTRING()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring).

- [`SUBSTRING(*`str`*,*`pos`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring)
  , [`SUBSTRING(*`str`* FROM *`pos`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring)
  , [`SUBSTRING(*`str`*,*`pos`*,*`len`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring)
  , [`SUBSTRING(*`str`* FROM *`pos`* FOR *`len`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring)

  The forms without a _`len`_ argument return a substring from string _`str`_ starting at position _`pos`_. The forms
  with a _`len`_ argument return a substring _`len`_ characters long from string _`str`_, starting at position _`pos`_.
  The forms that use `FROM` are standard SQL syntax. It is also possible to use a negative value for _`pos`_. In this
  case, the beginning of the substring is _`pos`_ characters from the end of the string, rather than the beginning. A
  negative value may be used for _`pos`_ in any of the forms of this function. A value of 0 for _`pos`_ returns an empty
  string.

  For all forms of [`SUBSTRING()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring),
  the position of the first character in the string from which the substring is to be extracted is reckoned as `1`.

  ```sql
  mysql> SELECT SUBSTRING('Quadratically',5);
          -> 'ratically'
  mysql> SELECT SUBSTRING('foobarbar' FROM 4);
          -> 'barbar'
  mysql> SELECT SUBSTRING('Quadratically',5,6);
          -> 'ratica'
  mysql> SELECT SUBSTRING('Sakila', -3);
          -> 'ila'
  mysql> SELECT SUBSTRING('Sakila', -5, 3);
          -> 'aki'
  mysql> SELECT SUBSTRING('Sakila' FROM -4 FOR 2);
          -> 'ki'
  ```

  This function is multibyte safe.

  If _`len`_ is less than 1, the result is the empty string.

- [`SUBSTRING_INDEX(*`str`*,*`delim`*,*`count`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring-index)

  Returns the substring from string _`str`_ before _`count`_ occurrences of the delimiter _`delim`_. If _`count`_ is
  positive, everything to the left of the final delimiter (counting from the left) is returned. If _`count`_ is
  negative, everything to the right of the final delimiter (counting from the right) is
  returned. [`SUBSTRING_INDEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring-index)
  performs a case-sensitive match when searching for _`delim`_.

  ```sql
  mysql> SELECT SUBSTRING_INDEX('www.mysql.com', '.', 2);
          -> 'www.mysql'
  mysql> SELECT SUBSTRING_INDEX('www.mysql.com', '.', -2);
          -> 'mysql.com'
  ```

  This function is multibyte safe.

- [`TO_BASE64(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_to-base64)

  Converts the string argument to base-64 encoded form and returns the result as a character string with the connection
  character set and collation. If the argument is not a string, it is converted to a string before conversion takes
  place. The result is `NULL` if the argument is `NULL`. Base-64 encoded strings can be decoded using
  the [`FROM_BASE64()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_from-base64) function.

  ```sql
  mysql> SELECT TO_BASE64('abc'), FROM_BASE64(TO_BASE64('abc'));
          -> 'JWJj', 'abc'
  ```

  Different base-64 encoding schemes exist. These are the encoding and decoding rules used
  by [`TO_BASE64()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_to-base64)
  and [`FROM_BASE64()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_from-base64):

    - The encoding for alphabet value 62 is `'+'`.
    - The encoding for alphabet value 63 is `'/'`.
    - Encoded output consists of groups of 4 printable characters. Each 3 bytes of the input data are encoded using 4
      characters. If the last group is incomplete, it is padded with `'='` characters to a length of 4.
    - A newline is added after each 76 characters of encoded output to divide long output into multiple lines.
    - Decoding recognizes and ignores newline, carriage return, tab, and space.

- [`TRIM([{BOTH | LEADING | TRAILING} [*`remstr`*\] FROM] *`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_trim)
  , [`TRIM([*`remstr`* FROM\] *`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_trim)

  Returns the string _`str`_ with all _`remstr`_ prefixes or suffixes removed. If none of the specifiers `BOTH`
  , `LEADING`, or `TRAILING` is given, `BOTH` is assumed. _`remstr`_ is optional and, if not specified, spaces are
  removed.

  ```sql
  mysql> SELECT TRIM('  bar   ');
          -> 'bar'
  mysql> SELECT TRIM(LEADING 'x' FROM 'xxxbarxxx');
          -> 'barxxx'
  mysql> SELECT TRIM(BOTH 'x' FROM 'xxxbarxxx');
          -> 'bar'
  mysql> SELECT TRIM(TRAILING 'xyz' FROM 'barxxyz');
          -> 'barx'
  ```

  This function is multibyte safe.

- [`UCASE(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ucase)

  [`UCASE()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ucase) is a synonym
  for [`UPPER()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_upper).

  `UCASE()` used within views is rewritten as `UPPER()`.

- [`UNHEX(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_unhex)

  For a string argument _`str`_
  , [`UNHEX(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_unhex) interprets each
  pair of characters in the argument as a hexadecimal number and converts it to the byte represented by the number. The
  return value is a binary string.

  ```sql
  mysql> SELECT UNHEX('4D7953514C');
          -> 'MySQL'
  mysql> SELECT X'4D7953514C';
          -> 'MySQL'
  mysql> SELECT UNHEX(HEX('string'));
          -> 'string'
  mysql> SELECT HEX(UNHEX('1267'));
          -> '1267'
  ```

  The characters in the argument string must be legal hexadecimal digits: `'0'` .. `'9'`, `'A'` .. `'F'`, `'a'` .. `'f'`
  . If the argument contains any nonhexadecimal digits, the result is `NULL`:

  ```sql
  mysql> SELECT UNHEX('GG');
  +-------------+
  | UNHEX('GG') |
  +-------------+
  | NULL        |
  +-------------+
  ```

  A `NULL` result can occur if the argument
  to [`UNHEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_unhex) is
  a [`BINARY`](https://dev.mysql.com/doc/refman/8.0/en/binary-varbinary.html) column, because values are padded
  with `0x00` bytes when stored but those bytes are not stripped on retrieval. For example, `'41'` is stored into
  a `CHAR(3)` column as `'41 '` and retrieved as `'41'` (with the trailing pad space stripped),
  so [`UNHEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_unhex) for the column value
  returns `X'41'`. By contrast, `'41'` is stored into a `BINARY(3)` column as `'41\0'` and retrieved as `'41\0'` (with
  the trailing pad `0x00` byte not stripped). `'\0'` is not a legal hexadecimal digit,
  so [`UNHEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_unhex) for the column value
  returns `NULL`.

  For a numeric argument _`N`_, the inverse
  of [`HEX(*`N`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_hex) is not performed
  by [`UNHEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_unhex).
  Use [`CONV(HEX(*`N`*),16,10)`](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_conv)
  instead. See the description of [`HEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_hex).

  If [`UNHEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_unhex) is invoked from within
  the [**mysql**](https://dev.mysql.com/doc/refman/8.0/en/mysql.html) client, binary strings display using hexadecimal
  notation, depending on the value of
  the [`--binary-as-hex`](https://dev.mysql.com/doc/refman/8.0/en/mysql-command-options.html#option_mysql_binary-as-hex)
  . For more information about that option,
  see [Section 4.5.1, “mysql — The MySQL Command-Line Client”](https://dev.mysql.com/doc/refman/8.0/en/mysql.html).

- [`UPPER(*`str`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_upper)

  Returns the string _`str`_ with all characters changed to uppercase according to the current character set mapping.
  The default is `utf8mb4`.

  ```sql
  mysql> SELECT UPPER('Hej');
          -> 'HEJ'
  ```

  See the description of [`LOWER()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lower) for
  information that also applies
  to [`UPPER()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_upper). This included
  information about how to perform lettercase conversion of binary
  strings ([`BINARY`](https://dev.mysql.com/doc/refman/8.0/en/binary-varbinary.html)
  , [`VARBINARY`](https://dev.mysql.com/doc/refman/8.0/en/binary-varbinary.html)
  , [`BLOB`](https://dev.mysql.com/doc/refman/8.0/en/blob.html)) for which these functions are ineffective, and
  information about case folding for Unicode character sets.

  This function is multibyte safe.

  `UCASE()` used within views is rewritten as `UPPER()`.

- [`WEIGHT_STRING(*`str`* [AS {CHAR|BINARY}(*`N`*)\] [*`flags`*])`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_weight-string)

  This function returns the weight string for the input string. The return value is a binary string that represents the
  comparison and sorting value of the string. It has these properties:

    -
  If [`WEIGHT_STRING(*`str1`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_weight-string)
  = [`WEIGHT_STRING(*`str2`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_weight-string),
  then `*`str1`* = *`str2`*` (_`str1`_ and _`str2`_ are considered equal)
    -
  If [`WEIGHT_STRING(*`str1`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_weight-string) < [`WEIGHT_STRING(*`str2`*)`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_weight-string)
  , then `*`str1`* < *`str2`*` (_`str1`_ sorts before _`str2`_)

  [`WEIGHT_STRING()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_weight-string) is a
  debugging function intended for internal use. Its behavior can change without notice between MySQL versions. It can be
  used for testing and debugging of collations, especially if you are adding a new collation.
  See [Section 10.14, “Adding a Collation to a Character Set”](https://dev.mysql.com/doc/refman/8.0/en/adding-collation.html)
  .

  This list briefly summarizes the arguments. More details are given in the discussion following the list.

    - _`str`_: The input string expression.
    - `AS` clause: Optional; cast the input string to a given type and length.
    - _`flags`_: Optional; unused.

  The input string, _`str`_, is a string expression. If the input is a nonbinary (character) string such as
  a [`CHAR`](https://dev.mysql.com/doc/refman/8.0/en/char.html)
  , [`VARCHAR`](https://dev.mysql.com/doc/refman/8.0/en/char.html),
  or [`TEXT`](https://dev.mysql.com/doc/refman/8.0/en/blob.html) value, the return value contains the collation weights
  for the string. If the input is a binary (byte) string such as
  a [`BINARY`](https://dev.mysql.com/doc/refman/8.0/en/binary-varbinary.html)
  , [`VARBINARY`](https://dev.mysql.com/doc/refman/8.0/en/binary-varbinary.html),
  or [`BLOB`](https://dev.mysql.com/doc/refman/8.0/en/blob.html) value, the return value is the same as the input (the
  weight for each byte in a binary string is the byte value). If the input is `NULL`
  , [`WEIGHT_STRING()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_weight-string)
  returns `NULL`.

  Examples:

  ```sql
  mysql> SET @s = _utf8mb4 'AB' COLLATE utf8mb4_0900_ai_ci;
  mysql> SELECT @s, HEX(@s), HEX(WEIGHT_STRING(@s));
  +------+---------+------------------------+
  | @s   | HEX(@s) | HEX(WEIGHT_STRING(@s)) |
  +------+---------+------------------------+
  | AB   | 4142    | 1C471C60               |
  +------+---------+------------------------+
  ```

  ```sql
  mysql> SET @s = _utf8mb4 'ab' COLLATE utf8mb4_0900_ai_ci;
  mysql> SELECT @s, HEX(@s), HEX(WEIGHT_STRING(@s));
  +------+---------+------------------------+
  | @s   | HEX(@s) | HEX(WEIGHT_STRING(@s)) |
  +------+---------+------------------------+
  | ab   | 6162    | 1C471C60               |
  +------+---------+------------------------+
  ```

  ```sql
  mysql> SET @s = CAST('AB' AS BINARY);
  mysql> SELECT @s, HEX(@s), HEX(WEIGHT_STRING(@s));
  +------+---------+------------------------+
  | @s   | HEX(@s) | HEX(WEIGHT_STRING(@s)) |
  +------+---------+------------------------+
  | AB   | 4142    | 4142                   |
  +------+---------+------------------------+
  ```

  ```sql
  mysql> SET @s = CAST('ab' AS BINARY);
  mysql> SELECT @s, HEX(@s), HEX(WEIGHT_STRING(@s));
  +------+---------+------------------------+
  | @s   | HEX(@s) | HEX(WEIGHT_STRING(@s)) |
  +------+---------+------------------------+
  | ab   | 6162    | 6162                   |
  +------+---------+------------------------+
  ```

  The preceding examples use [`HEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_hex) to
  display the [`WEIGHT_STRING()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_weight-string)
  result. Because the result is a binary
  value, [`HEX()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_hex) can be especially useful
  when the result contains nonprinting values, to display it in printable form:

  ```sql
  mysql> SET @s = CONVERT(X'C39F' USING utf8) COLLATE utf8_czech_ci;
  mysql> SELECT HEX(WEIGHT_STRING(@s));
  +------------------------+
  | HEX(WEIGHT_STRING(@s)) |
  +------------------------+
  | 0FEA0FEA               |
  +------------------------+
  ```

  For non-`NULL` return values, the data type of the value
  is [`VARBINARY`](https://dev.mysql.com/doc/refman/8.0/en/binary-varbinary.html) if its length is within the maximum
  length for [`VARBINARY`](https://dev.mysql.com/doc/refman/8.0/en/binary-varbinary.html), otherwise the data type
  is [`BLOB`](https://dev.mysql.com/doc/refman/8.0/en/blob.html).

  The `AS` clause may be given to cast the input string to a nonbinary or binary string and to force it to a given
  length:

    - `AS CHAR(*`N`*)` casts the string to a nonbinary string and pads it on the right with spaces to a length of _`N`_
      characters. _`N`_ must be at least 1. If _`N`_ is less than the length of the input string, the string is
      truncated to _`N`_ characters. No warning occurs for truncation.
    - `AS BINARY(*`N`*)` is similar but casts the string to a binary string, _`N`_ is measured in bytes (not characters)
      , and padding uses `0x00` bytes (not spaces).

  ```sql
  mysql> SET NAMES 'latin1';
  mysql> SELECT HEX(WEIGHT_STRING('ab' AS CHAR(4)));
  +-------------------------------------+
  | HEX(WEIGHT_STRING('ab' AS CHAR(4))) |
  +-------------------------------------+
  | 41422020                            |
  +-------------------------------------+
  mysql> SET NAMES 'utf8';
  mysql> SELECT HEX(WEIGHT_STRING('ab' AS CHAR(4)));
  +-------------------------------------+
  | HEX(WEIGHT_STRING('ab' AS CHAR(4))) |
  +-------------------------------------+
  | 0041004200200020                    |
  +-------------------------------------+
  ```

  ```sql
  mysql> SELECT HEX(WEIGHT_STRING('ab' AS BINARY(4)));
  +---------------------------------------+
  | HEX(WEIGHT_STRING('ab' AS BINARY(4))) |
  +---------------------------------------+
  | 61620000                              |
  +---------------------------------------+
  ```

  The _`flags`_ clause currently is unused.

  If [`WEIGHT_STRING()`](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_weight-string) is
  invoked from within the [**mysql**](https://dev.mysql.com/doc/refman/8.0/en/mysql.html) client, binary strings display
  using hexadecimal notation, depending on the value of
  the [`--binary-as-hex`](https://dev.mysql.com/doc/refman/8.0/en/mysql-command-options.html#option_mysql_binary-as-hex)
  . For more information about that option,
  see [Section 4.5.1, “mysql — The MySQL Command-Line Client”](https://dev.mysql.com/doc/refman/8.0/en/mysql.html).

## [12.9 What Calendar Is Used By MySQL?](https://dev.mysql.com/doc/refman/8.0/en/mysql-calendar.html)

## [12.10 Full-Text Search Functions](https://dev.mysql.com/doc/refman/8.0/en/fulltext-search.html)

## [12.11 Cast Functions and Operators](https://dev.mysql.com/doc/refman/8.0/en/cast-functions.html)

## [12.12 XML Functions](https://dev.mysql.com/doc/refman/8.0/en/xml-functions.html)

## [12.13 Bit Functions and Operators](https://dev.mysql.com/doc/refman/8.0/en/bit-functions.html)

## [12.14 Encryption and Compression Functions](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html)

## [12.15 Locking Functions](https://dev.mysql.com/doc/refman/8.0/en/locking-functions.html)

## [12.16 Information Functions](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html)

## [12.17 Spatial Analysis Functions](https://dev.mysql.com/doc/refman/8.0/en/spatial-analysis-functions.html)

## [12.18 JSON Functions](https://dev.mysql.com/doc/refman/8.0/en/json-functions.html)

## [12.19 Functions Used with Global Transaction Identifiers (GTIDs)](https://dev.mysql.com/doc/refman/8.0/en/gtid-functions.html)

## [12.20 Aggregate Functions](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions-and-modifiers.html)

## [12.21 Window Functions](https://dev.mysql.com/doc/refman/8.0/en/window-functions.html)

## [12.22 Performance Schema Functions](https://dev.mysql.com/doc/refman/8.0/en/performance-schema-functions.html)

## [12.23 Internal Functions](https://dev.mysql.com/doc/refman/8.0/en/internal-functions.html)

## [12.24 Miscellaneous Functions](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html)

## [12.25 Precision Math](https://dev.mysql.com/doc/refman/8.0/en/precision-math.html)
