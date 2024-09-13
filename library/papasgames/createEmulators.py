import os

files=os.listdir("./")

generated=[]

for file in files:
    if file.split(".")[1]=="swf":
        print(f"Generating emulator for {file}")
        template=f'<!doctype html><html> <head><title>New Tab</title><script src="https://unpkg.com/@ruffle-rs/ruffle"></script></head><body><script src="random.js"></script><embed id="game-iframe" src="{file}" width="960px" height="720px" frameborder="0" /></body></html>'
        print(f"Saving file as {file.split('.')[0]}.html")
        with open(f"{file.split('.')[0]}.html","w") as f:
            f.write(template)
        generated.append(f"{file.split('.')[0]}.html")

print("\n--- ADD TO GAMES.HTML ---\n")

for gen in generated:
    print(f'<a href="library/papasgames/{gen}">{gen.split(".html")[0]}</a>')
