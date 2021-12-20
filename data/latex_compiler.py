template = r"""\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage{adjustbox}
\begin{document}

\begin{table}

\adjustbox{max width=\textwidth}{%
\begin{tabular}{<metrics_shape>}
<metrics_items>
\end{tabular}

\end{table}

\clearpage


\begin{table}

\adjustbox{max width=\textwidth}{%
\begin{tabular}{<symbols_shape>}
<symbols_items>
\end{tabular}

\end{table}

\end{document}"""

# pip install pyyaml
import yaml

metrics_file = open("graph_metrics.yaml", "r")
symbols_file = open("graph_symbols.yaml", "r")

metrics = yaml.load(metrics_file)
symbols = yaml.load(symbols_file)

metric_rows = []
for metric in metrics:
    data = metrics[metric]
    desc = data["desc"].replace("&", "\&")
    eq = "$ " + data["eq"] + " $"
    cite = data["cite"].replace("&", "\&") if data["cite"] else "-"
    impl = data["impl"].replace("&", "\&") if data["impl"] else "-"
    name = metric.replace("&", "\&")
    row = (name, desc, eq, cite, impl)
    metric_rows.append(row)

metric_rows_str = [" & ".join(row) for row in metric_rows]
metric_str = " \\\\ \n".join(metric_rows_str)
template = template.replace("<metrics_items>", metric_str)
template = template.replace("<metrics_shape>", "|".join(["c"]*len(metric_rows[0])))

symbol_rows = []
for symbol in symbols:
    data = symbols[symbol]
    if type(data) is str:
        row = (symbol.replace("&", "\&"), data.replace("&", "\&"))
        symbol_rows.append(row)
    else:
        row = (symbol.replace("&", "\&"), data["desc"].replace("&", "\&"))
        symbol_rows.append(row)

symbol_rows_str = [" & ".join(row) for row in symbol_rows]
symbol_str = " \\\n".join(symbol_rows_str)
template = template.replace("<symbols_items>", symbol_str)
template = template.replace("<symbols_shape>", "|".join(["c"]*len(symbol_rows[0])))

output_file = open("graph_metrics.tex","w+")
output_file.write(template)
output_file.close()