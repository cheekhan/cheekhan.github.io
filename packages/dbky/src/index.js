import {program} from 'commander'
import gitLog from "./GitLog/index";

program.version('0.0.4').description('dbky所有的办公套件')

// 按时间范围的代码改动审查命令
program
    .command('cr')
    .description('代码改动审查：cr -s "2025-07-01" -u "2025-07-31" -a "cheekhan"')
    .requiredOption('-s|--since <date>', '开始时间yyyy-mm-dd')
    .requiredOption('-u|--until <date>', '结束时间yyyy-mm-dd')
    .requiredOption('-a|--author <name>', '搜索的用户')
    .action(({since, until, author}) => gitLog(since, until, author))
// dbky cr -s "2025-07-01 00:00:00" -u "2025-07-31 23:59:59" -a "cheekhan"
// dbky cr -s "2025-01-01 00:00:00" -u "2025-12-31 23:59:59" -a "CheeKhan"
// node dist/bin cr -s "2025-01-01" -u "2025-12-31" -a "CheeKhan"

program.parse()
