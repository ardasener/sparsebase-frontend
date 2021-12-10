# pip install pyyaml
import yaml
import json
import os

import pathlib
root_dir = pathlib.Path(__file__).parent.resolve()


with open(os.path.join(root_dir,"metrics.yaml"), 'r') as yaml_in, open(os.path.join(root_dir,"metrics.json"), "w+") as json_out:
    yaml_object = yaml.safe_load(yaml_in) # yaml_object will be a list or a dict
    json.dump(yaml_object, json_out)

with open(os.path.join(root_dir,"symbols.yaml"), 'r') as yaml_in, open(os.path.join(root_dir,"symbols.json"), "w+") as json_out:
    yaml_object = yaml.safe_load(yaml_in) # yaml_object will be a list or a dict
    json.dump(yaml_object, json_out)