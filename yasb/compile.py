import py_compile

files_to_compile = [
    ("./widget/power_plan.py", "./widget/power_plan.pyc"),
    ("./widget/power_plan_schema.py", "./widget/power_plan_schema.pyc"),
]

for src, dst in files_to_compile:
    py_compile.compile(src, cfile=dst)
    print(f"Compiled {src} -> {dst}")